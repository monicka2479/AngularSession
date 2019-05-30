import { Component } from '@angular/core';
import { User } from './user';
import { EmployeeService } from './employee.service';


@Component({
  selector: 'app-root',
  template: '<app-user></app-user>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Viu'];

  constructor(private employeeService: EmployeeService){}

  userList = User[8];


  // onSubmit() {
  //    this.employeeService.enroll(this.userModel)
  //   .subscribe(
  //      data => console.log('success', data),
  //      error => console.error('success', error)
  //    )
  // }
}
