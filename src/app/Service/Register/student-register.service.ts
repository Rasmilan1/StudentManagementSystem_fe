import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentRegisterService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:5101/api/Student';

  getStudents(): Observable<any> {
    return this.http.get(this.url);
  }

  getStudent(studentId: string) {
    return this.http.get<any>(this.url + "/" + studentId);
  }

  AddStudent(student: any): Observable<any> {
    return this.http.post(this.url, student);
  }

  deleteStudent(deleteId : any)
  {
    return this.http.delete(this.url + "/" + deleteId)
  }

  editStudent( studentid : string, student: any)
  {
    return this.http.put(this.url + "/" + studentid, student)
  }
}

