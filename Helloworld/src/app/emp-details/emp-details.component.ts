import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-details',
  template: `
  <h2>Employee Details </h2>
  <ul *ngFor = "let person of persons" >
    <li>{{person.Id}}, {{person.Name}}, {{person.Age}}</li>
  </ul>
  `,
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent  implements OnInit {

  public persons = [];
  constructor(private employeeService: EmployeeService){ }
  ngOnInit(){
    this.employeeService.getEmployees().
      subscribe(data => this.persons = data);
  }
}
