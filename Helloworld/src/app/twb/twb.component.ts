import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twb',
  template: `
  <div *ngFor='let colour of colours'>
      <h2>{{colour}}</h2>
  </div>
  `,
  styleUrls: ['./twb.component.css']
})
export class TwbComponent  {
public colours = ['red', 'green', 'yellow'];
}
