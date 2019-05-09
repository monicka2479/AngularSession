import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  template: `
  <input (click)='name="Welcome"' type ='button'
  value='Click'/> <br/> <br/>
  {{name}}
  `,
  styleUrls: ['./event.component.css']
})
export class EventComponent  {
  public name;
}
