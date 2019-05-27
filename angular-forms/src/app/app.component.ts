import { Component } from '@angular/core';
import { User } from './user';
import { EmployeeService } from './employee.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Viu'];
  userModel = new User('Monicka', 'monicka@test.com', '23434234324', '', 'morning', true);
  constructor(private employeeService: EmployeeService){}

  onSubmit() {
     this.employeeService.enroll(this.userModel)
    .subscribe(
       data => console.log('success', data),
       error => console.error('success', error)
     )
  }
}
