import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { feedback } from '../Models/model';

@Injectable({
  providedIn: 'root'
})
export class AdminNotificationService {
  private feedbackurl = "http://localhost:5101/api/Feedback/Feedback"; // Your API URL

  constructor(private http: HttpClient) { }

  // Get all feedbacks
  getFeedbacks(): Observable<feedback[]> {
    return this.http.get<feedback[]>(this.feedbackurl);
  }

  // Delete feedback (if required)
  deleteFeedback(feedbackId: string): Observable<void> {
    return this.http.delete<void>(`${this.feedbackurl}?UserId=${feedbackId}`);
  }
}

