import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-list',
  template: `
  <h2>Employee List </h2>
  {{errorMsg}}
  <ul *ngFor = "let person of persons" >
    <li>{{person.Name}}</li>
  </ul>
  `,
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  public persons = [];
  public errorMsg;
  constructor(private employeeService: EmployeeService){ }
  ngOnInit(){
    this.employeeService.getEmployees().
      subscribe(data => this.persons = data,
                error => this.errorMsg = error);
  }
}
