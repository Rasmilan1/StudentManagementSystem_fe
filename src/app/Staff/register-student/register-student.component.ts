import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentRegisterService } from '../../Service/Register/student-register.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewclassService } from '../../Service/Class/viewclass.service';

@Component({
  selector: 'app-register-student',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './register-student.component.html',
  styleUrl: './register-student.component.css',
  providers: [StudentRegisterService, ViewclassService]
})
export class RegisterStudentComponent implements OnInit {
  studentForm: FormGroup;
  isEditMode: boolean = false;

  students: any[] = [];

  classes: any[] = [];

  studentid: string;

  


  constructor(private fb: FormBuilder, private service: StudentRegisterService, private router: Router, private classService: ViewclassService, private route: ActivatedRoute) {


    const sid = this.route.snapshot.paramMap.get("id");
    this.studentid = String(sid);

    if (sid) {
      this.isEditMode = true;
    }
    else {
      this.isEditMode = false;
    }





    if (this.isEditMode == true) {
      this.studentForm = this.fb.group({
        id: [''],
        name: ['', [Validators.required]],
        phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
        classID: ['', [Validators.required]],
       
    })
    } else {
      this.studentForm = this.fb.group({
        name: ['', [Validators.required]],
        phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
        classID: ['', [Validators.required]],
        userReq: this.fb.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(8)]]
        })
      });
    }




  }

  ngOnInit(): void {


    if (this.isEditMode == true) {
      this.service.getStudent(this.studentid).subscribe((data: any) => {
        this.studentForm.patchValue(data);



      })
    }
    this.classService.getClasses().subscribe(data => {
      this.classes = data
    })


  }





  onSubmit() {
    if (this.studentForm.valid) {
      const student = this.studentForm.value; 
      
      const studentData = {
        name: student.name,
        phone: student.phone,
        classID: student.classID,
        userReq: student.userReq // userReq is the object with email and password
      };
      
      const studentUpdateData = {
        name: student.name,
        phone: student.phone,
        classID: student.classID,
      };
      

      if (this.isEditMode) {

        this.studentid = student.id
        this.service.editStudent(this.studentid, studentUpdateData).subscribe(data => {
          alert("Student updated successfully!");
          this.studentForm.reset();
          this.router.navigate(["/staff/viewStudents"]); // Reset the form after successful update
        },
          (error) => {
            console.error("Error updating student:", error);
            alert("Failed to update student. Please try again.");
          }
        );
      } else {
        // If adding, add a new student
        this.service.AddStudent(studentData).subscribe(
          (data) => {
            alert("Student added successfully!");
            this.studentForm.reset();
            this.router.navigate(["/staff/viewStudents"]);  // Reset the form after successful addition
          },
          (error) => {
            console.error("Error adding student:", error);
            alert("Failed to add student. Please try again.");
          }
        );
      }
    } else {
      alert("Please fill all required fields correctly.");
    }
  }




 
  



  cancel() {
    this.studentForm.reset()
    this.router.navigate(['/viewStudents'])
  }




  

}








// onSubmit() {
//   if (this.studentForm.valid) {
//     const student = this.studentForm.value;
//     if (this.isEditMode) {
//       // If in edit mode, update the student
//       this.service.editStudent(this.studentid, student).subscribe(
//         (data) => {
//           alert('Student updated successfully!');
//           this.router.navigate(['/viewStudents']);
//         },
//         (error) => {
//           console.error('Error updating student:', error);
//           alert('Failed to update student. Please try again.');
//         }
//       );
//     } else {
//       // If adding a new student
//       this.service.AddStudent(student).subscribe(
//         (data) => {
//           alert('Student added successfully!');
//           this.studentForm.reset();
//           this.router.navigate(['/viewStudents']);  // Navigate after successful add
//         },
//         (error) => {
//           console.error('Error adding student:', error);
//           alert('Failed to add student. Please try again.');
//         }
//       );
//     }
//   } else {
//     alert('Please fill all required fields correctly.');
//   }
// }























 