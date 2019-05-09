import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
  <h1 class="text-success">Normal Text</h1>
  <h1 [class]="fail">Class Binded Text</h1>
  <h3 class="text-warning" [class]="fail">Class binding made
  normal class as dummy</h3>
  `,
  styles: [`
  .text-success {
    color:green
  }
  .text-danger {
    color:red
  }
  .text-warning {
    text-transform:uppercase;
  }
  `]
})
export class UserComponent implements OnInit {

  public  fail = 'text-danger';
  public  warn = 'text-warning';

  constructor() { }
  ngOnInit() { }
}
