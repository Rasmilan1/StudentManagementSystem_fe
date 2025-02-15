import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Attendance } from '../Models/model';

@Injectable({
  providedIn: 'root'
})
export class StudentAttendanceService {

  private baseUrl = 'http://localhost:5101/api/Attendance';

  constructor(private http: HttpClient) { }

  submitAttendance(attendanceData:Attendance[] ) {
    return this.http.post(`${this.baseUrl}`, attendanceData);
  }

  getAttendanceByStudentId(studentId: string): Observable<Attendance[]> {
    return this.http.get<Attendance[]>(`${this.baseUrl}/TimetablesByStudentId?id=${studentId}`);
  }
  
  // Get attendance for a student by a specific date
  getAttendanceByStudentAndDate(studentId: string, date: string): Observable<Attendance[]> {
    return this.http.get<Attendance[]>(`${this.baseUrl}/student/${studentId}/date/${date}`);
  }

  getAllAttendance(): Observable<Attendance[]> {
    return this.http.get<Attendance[]>(this.baseUrl);
  }


}

