import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { feedback } from '../Models/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentFeedbackService {

  private url = "http://localhost:5101/api/Feedback"; // Your API URL

  constructor(private http: HttpClient) { }

  // Get all feedbacks
  getFeedbacks(): Observable<feedback[]> {
    return this.http.get<feedback[]>(this.url);
  }

  // Get specific feedback by user ID
  getFeedback(userId: string): Observable<feedback[]> {
    return this.http.get<feedback[]>(`${this.url}GetFeedbackByUserId?UserId=${userId}`);
  }

  // Add new feedback
  addFeedback(feedback: feedback): Observable<feedback> {
    return this.http.post<feedback>(this.url, feedback);  // Assuming the backend will generate the 'id'
  }

  // Update feedback (assuming you update feedback with the 'id')
  updateFeedback(feedback: feedback): Observable<feedback> {
    return this.http.put<feedback>(this.url, feedback);  // Assuming the API expects 'id' here as well
  }
  deleteFeedback(feedbackId: string): Observable<void> {
    return this.http.delete<void>(`${this.url}Feedback?UserId=${feedbackId}`);
  }
  // deleteFeedback(feedbackId: string): Observable<void> {
  //   return this.http.delete<void>(`${this.url}?UserId=${feedbackId}`);
  // }
}
