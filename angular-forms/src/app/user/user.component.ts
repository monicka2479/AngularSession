import { Component, OnInit, Input } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }
  name: string;
  date: string;
  users:User[] = [];
  list = [1, 2, 3, 4, 5, 6,7,8,9,10];


  ngOnInit() {
    for (let i of this.list) {
      let user1 = new User('','','08.00 AM','09.00 AM','Task 1', 'true1')
      this.users.push(user1);
    }
  }

  onSubmit(name, date) {
          console.log("Before: "+ JSON.stringify(this.users));
          console.log("name: "+name +"date: "+date);


            // for (let user1 of this.users) {
            //         //  console.log("plannedTask: "+ user.plannedTask); // 1, "string", false

            //         user1.userName=this.name;
            //           user1.taskDate=this.date;
            //       }

            //       console.log("After: "+ this.users);
            // this.userService.enroll(this.users)
            //     .subscribe(
            //       data => console.log('success', data),
            //         error => console.error('success', error)
            //       )
              }

}
