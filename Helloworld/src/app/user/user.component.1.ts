import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
  <input [id]="myId" type ="text" value ="Monicka"/>
  <input id="{{myId}}" type ="text" value ="Monicka"/>
  <br/> <br/>
  <u>Boolean value wont affect in interpolation</u>
  <input disabled="{{disabled}}"  type ="text" value ="Monicka"/>
  <input disabled="{{notDisabled}}" type ="text" value ="Monicka"/>

  <br/> <br/>
  <u>Boolean value affect in property binding</u>
  <input [disabled]="disabled" type ="text" value ="Monicka"/>
  <input [disabled]="notDisabled"  type ="text" value ="Monicka"/>
  `,
  styles: [`  h2 span {color: green;} `]
})
export class UserComponent1 implements OnInit {

  public myId = "testId";
  public  disabled = true;
  public notDisabled = false;
  constructor() { }
  ngOnInit() { }
}
