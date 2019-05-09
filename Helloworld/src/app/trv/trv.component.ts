import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trv',
  template: `
  <input #inputTxt type="text"/>
  <input (click)='OnClick(inputTxt.value)' type ='button'
  value='Click'/> <br/> <br/>
  {{name}}
  `,
  styleUrls: ['./trv.component.css']
})
export class TrvComponent {
  public name;
  OnClick(txtValue) {
     this.name = txtValue;
  }

}
