import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ViewclassService } from '../../Service/Class/viewclass.service';
import { StudentService } from '../../Service/Student/student.service';
import { CommonModule } from '@angular/common';
import { StudentAttendanceService } from '../../Service/Attendance/student-attendance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mark-attendance',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './mark-attendance.component.html',
  styleUrl: './mark-attendance.component.css'
})
export class MarkAttendanceComponent implements OnInit {
  Classes: any[] = [];
  students: { id: number, name: string, status: string }[] = [];
  attendanceStatuses = [
    { value: 'Present', label: 'Present' },
    { value: 'Absent', label: 'Absent' },
    { value: 'Late Coming', label: 'Late Coming' }
  ];
  selectedClass: any = '';

  constructor(private classService: ViewclassService, private studentService: StudentService, private studentAttendanceService: StudentAttendanceService, private router: Router) { }

  ngOnInit(): void {
    this.loadClasses();
  }

  // Load classes from the backend
  loadClasses(): void {
    this.classService.getClasses().subscribe({
      next: (response) => {
        this.Classes = response;
      },
      error: (err) => {
        console.error('Error fetching classes:', err);
      }
    });
  }

  // Load students based on the selected class
  loadStudents(classId: string): void {
    if (!classId) return;
    this.studentService.getStudentsByClass(classId).subscribe({
      next: (response) => {
        this.students = response.map(student => ({ ...student, status: '' })); // Add status field
      },
      error: (err) => {
        console.error('Error fetching students:', err);
      }
    });
  }

  // Handle attendance updates
  updateAttendanceStatus(studentId: number, status: string): void {
    const student = this.students.find(s => s.id === studentId);
    if (student) {
      student.status = status;
    }
  }

  getBackgroundColor(status: string): string {
    switch (status) {
      case 'Present': return '#28d17c';
      case 'Absent': return '#e63946';
      case 'Late Coming': return '#ffae42';
      default: return '#ffffff';
    }
  }


  getTotalCount(status: string): number {
    return this.students.filter(student => student.status === status).length;
  }

  submitAttendance(): void {
    // Assuming you send the data to the backend here
    const attendanceData = this.students.map(student => ({
      studentId: student.id,
      status: student.status
    }));

    // Assuming there's an API call here
    this.studentService.submitAttendance(attendanceData).subscribe({
      next: (response) => {
        console.log('Attendance submitted successfully', response);
      },
      error: (err) => {
        console.error('Error submitting attendance:', err);
      }
    });
  }
}
