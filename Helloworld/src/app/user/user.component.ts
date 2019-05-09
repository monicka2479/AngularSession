import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
   <h3 [ngClass]="custClass">HasSuccess, isSpecial <br/>
   classes are true and applied</h3>
  `,
  styles: [`
  .text-special {background:yellow; }
  .text-danger {color:red}
  .text-success {color:green; }
  `]
})
export class UserComponent implements OnInit {
  public  hasError = false;
  public  hasSuccess = true;
  public  isSpecial = true;
  public custClass = {
    'text-danger' :  this.hasError,
    'text-success' : this.hasSuccess,
    'text-special' : this.isSpecial,
  };

  constructor() { }
  ngOnInit() { }
}
