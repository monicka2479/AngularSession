import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   url = "http://localhost:3000/enroll";
  constructor(private http: HttpClient) { }
  enroll(user: User) {
    return this.http.post<any>(this.url, user);
  }
}
