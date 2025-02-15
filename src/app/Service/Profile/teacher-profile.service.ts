import { Injectable } from '@angular/core';
import { teacher } from '../Models/model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherProfileService {

  url = 'http://localhost:5101/api/Teacher/user'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  // Fetch teacher profile by ID
  getTeacher(userId: string): Observable<teacher> {  // Return single student instead of array
    return this.http.get<teacher>(`${this.url}/${userId}`);
  }

  // Update teacher profile
  updateTeacher(teacher: teacher, teacherid: number) {
    return this.http.put(`${this.url}/${teacherid}`, teacher);
  }

  teacherbyteacherid(teacherid: string): Observable<teacher> {  // Return single student instead of array
    return this.http.get<teacher>(`http://localhost:5101/api/Teacher/TeacherByTeacherId?teacherId=${teacherid}`);
  }

}
