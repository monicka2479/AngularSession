import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h2>{{message}}</h2>
  <app-test (childEvent)="message=$event"></app-test>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public message;
}
