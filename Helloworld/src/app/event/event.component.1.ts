import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  template: `
  <input (click)='onClick($event)' type ='button'
  value='Click'/>
  {{name}}
  `,
  styleUrls: ['./event.component.css']
})
export class EventComponent  {
   public name;
  onClick(event){
    this.name = 'Monicka Akilan';
  }

}
