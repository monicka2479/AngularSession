import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = "enroll";
  constructor(private http: HttpClient) { }
  enroll(user: User) {
    return this.http.post<any>(this.url, user);
  }
}
