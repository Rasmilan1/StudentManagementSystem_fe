import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {
  private apiUrl = 'http://localhost:5101/api/Timetable/TimeTable';

  constructor(private http: HttpClient) { }




  addTimetable(timetable: any): Observable<any> {
    return this.http.post(this.apiUrl, timetable);
  }

  getTimetables(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getTimetableByTeacherId(teacherId: string): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:5101/api/Teacher/TimetableByTeacherId?id=${teacherId}`);
  }
  getTimetableByClassId(classId: string): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:5101/api/Timetable/ByClassId?id=" + classId);
  }



 getTimetableByDate(date: string) {
  return this.http.get<any[]>(`/api/timetables/byDate?date=${date}`);
}

// getClassNameById(classId: string): Observable<any> {
//   return this.http.get<any>(`http://localhost:5101/api/Classes/${classId}`);
// }

getClassNameById(classId: string): Observable<{ className: string }> {
  return this.http.get<{ className: string }>(`http://localhost:5101/api/Class/ClassById?id=${classId}`);
}
// getClassNameById(classId: string): Observable<{ className: string }> {
//   return this.http.get<{ className: string }>(`http://localhost:5101/api/Classes/${classId}`);
// }



}

export interface TimetableEntry {
  id: string;
  teacherID: string;
  classID: string; // Added this
  date: string;
  startTime: string;
  endTime: string;
  className?: string;
}
