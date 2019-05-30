import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://localhost:3000/enroll";
  constructor(private http: HttpClient) { }
  enroll(users: User[]) {
    console.log(users.length);
    return this.http.post<any>(this.url, users);
  }
}
