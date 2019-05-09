import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<button (click) ="fireEvent()" >Send Data</button>`  ,
  styleUrls: ['./test.component.css']
})
export class TestComponent  {
  @Output() public childEvent = new EventEmitter();
  fireEvent() {
    this.childEvent.emit('Hey am from Child component');
  }
}
