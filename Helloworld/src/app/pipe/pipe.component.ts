import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  template: `
  <h3>{{.25 | percent}}</h3>

  <h3>{{.25 | currency}}</h3>
  <h3>{{.25 | currency: 'INR ': 'code'}}</h3>
  <h3>{{.25 | currency: 'EUR ': 'code'}}</h3>

  <h3>{{date}}</h3>
  <h3>{{date | date:'short'}}</h3>
  <h3>{{date | date:'shortDate'}}</h3>
  <h3>{{date | date:'shortTime'}}</h3>
  `,
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent  {
  public date = new Date();
}
