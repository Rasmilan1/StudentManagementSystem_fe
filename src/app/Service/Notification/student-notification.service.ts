import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentNotificationService {
  private apiUrl = 'http://localhost:5101/api/Notification/Notification'; // Your API endpoint
  private getapiUrl = 'http://localhost:5101/api/Notification/Get%20Notification%20By%20UserId';

  constructor(private http: HttpClient) {}

  postNotification(notification: { userID: string, notificationType: string, message: string, date: string }): Observable<any> {
    return this.http.post(this.apiUrl, notification);
  }

  getNotificationsByUserId(userId: string): Observable<any> {
    return this.http.get(`${this.getapiUrl}?UserId=${userId}`);
  }
  deleteNotification(notificationId: string): Observable<any> {
    const url = `http://localhost:5101/api/Notification/Notification/${notificationId}`;
    return this.http.delete(url);
  }

}

