import { Injectable } from '@angular/core';
import { staff } from '../Models/model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaffProfileService {

  url = 'http://localhost:5101/api/Staff/user'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  // Fetch teacher profile by ID
  getStaff(userId: string): Observable<staff> {  // Return single student instead of array
    return this.http.get<staff>(`${this.url}/${userId}`);
  }

  // Update teacher profile
  updateStaff(staff: staff, staffId: number) {
    return this.http.put(`${this.url}/${staffId}`, staff);
  }
}