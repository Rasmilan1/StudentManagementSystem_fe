import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffRegisterService {
  constructor(private http:HttpClient) { }

  url = 'http://localhost:5101/api/Staff/Staff';

  getstaffs(): Observable<any> {
    return this.http.get(this.url);
  }

  getstaff(staffId: string) {
    return this.http.get<any>("http://localhost:5101/api/Staff/StaffById?id=" + staffId);
  }

  Addstaff(staff: any): Observable<any> {
    return this.http.post(this.url, staff);
  }


  deletestaff(deleteId : any) {
    return this.http.delete(this.url + '?id=' + deleteId);
}

editstaff( staffId : string, staff: any)
{
  return this.http.put(this.url + '?Id=' + staffId, staff)

}
}
