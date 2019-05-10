import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dept-list',
  template: `
    <h3>Department List</h3>
    <ul >
      <li (click)="onSelect(department)" *ngFor= "let department of departments">
        <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `,
  styles: []
})

export class DeptListComponent  {

  constructor(private router: Router) {}

  public departments = [
    {id: '1', name: 'Angular'},
    {id: '2', name: 'Node'},
    {id: '3', name: 'MongoDB'},
    {id: '4', name: 'Ruby'},
    {id: '5', name: 'Bootstrap'},
  ];

  onSelect(department) {
    this.router.navigate(['/dept-list', department.id]);
  }
}
