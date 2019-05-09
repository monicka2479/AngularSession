import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  template: `
  <h3>{{message}}</h3>
  <h3>{{message | lowercase}}</h3>
  <h3>{{message | uppercase}}</h3>
  <h3>{{message | titlecase}}</h3>
  <h3>{{message | slice:3}}</h3>
  <h3>{{message | slice:3:5}}</h3>
  <h3>{{obj | json}}</h3>
  <hr/>
  <h3>{{5.678 | number:'1.2-3'}}</h3>
  <h3>{{5.678 | number:'3.4-5'}}</h3>
  <h3>{{5.678 | number:'3.1-2'}}</h3>
  `,
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent  {
  public message = 'Welcome to angular session';
  public obj = {
    "firstname":'Monicka',
    "lastname":'Akilan'
  }
}
