import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }

  users:User[] = [];
  list = [1, 2, 3, 4, 5, 6];

  ngOnInit() {

    for (let i of this.list) {
      this.users.push(new User('Monicka', 'monicka@test.com',
      '23434234324', '', 'morning', true));
    }

  }

      onSubmit() {
        console.log(this.users);
        for (let user of this.users) {
                  console.log("Email: "+ user.email); // 1, "string", false
              }
        this.userService.enroll(this.users)
            .subscribe(
              data => console.log('success', data),
                error => console.error('success', error)
              )
          }

}
