import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherRegisterService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:5101/api/Teacher/Teacher';

  getTeachers(): Observable<any> {
    return this.http.get(this.url);
  }

  getTeacher(teacherId: string) {
    return this.http.get<any>("http://localhost:5101/api/Teacher/TeacherById?id=" + teacherId);
  }

  AddTeacher(teacher: any): Observable<any> {
    return this.http.post(this.url, teacher);
  }


  deleteTeacher(deleteId : any) {
    return this.http.delete(this.url + '?id=' + deleteId);
}

editTeacher( teacherId : string, teacher: any)
{
  return this.http.put(this.url + '?id=' + teacherId, teacher)

}
}
