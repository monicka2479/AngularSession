import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
   <h3 [class.text-danger]="hasError">hasError
   true class applied</h3>
   <h3 [class.text-success]="hasSuccess">hasSuccess
   false class not applied</h3>
  `,
  styles: [`
  .text-danger {
    color:red
  }
  .text-success {
    color:green
  }
  `]
})
export class UserComponent implements OnInit {

  public  hasError = true;
  public  hasSuccess = false;

  constructor() { }
  ngOnInit() { }
}
