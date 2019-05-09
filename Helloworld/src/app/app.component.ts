import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-emp-list></app-emp-list>
  <hr/>
  <app-emp-details></app-emp-details>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public message;
}
