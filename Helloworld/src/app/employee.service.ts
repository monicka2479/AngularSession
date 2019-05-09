import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url: string = '/assets/data/employees1.json';
  constructor(private httpClient: HttpClient){}
  getEmployees(): Observable<iEmployee[]>{
    return this.httpClient.get<iEmployee[]>(this.url)
    .catch(this.errorHandler);

  }
    errorHandler(error:HttpErrorResponse) {
      return (Observable.throw(error.message || "server error"));
    }
}
export interface iEmployee {
  id: string;   name: string;   age: string;
}
