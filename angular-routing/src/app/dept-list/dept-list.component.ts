import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-dept-list',
  template: `
    <h3>Department List</h3>
    <ul >
      <li (click)="onSelect(department)" [class.selected]="isSelected(department)"
      *ngFor= "let department of departments">
        <span>{{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `,
  styles: [`.selected {color:red} `]
})

export class DeptListComponent implements OnInit {

  public  selectedId;
  constructor(private router: Router, private route: ActivatedRoute) {}
  public departments = [
    {id: 1, name: 'Angular'}, {id: 2, name: 'Node'}, {id: 3, name: 'MongoDB'},
    {id: 4, name: 'Ruby'}, {id: 5, name: 'Bootstrap'},
  ];
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap) =>{
      let id= parseInt(params.get("id"));
      this.selectedId = id;
    })
   }
  onSelect(department) {
    //this.router.navigate(['/dept-list', department.id]);
    this.router.navigate([department.id], {relativeTo:this.route});

  }
  isSelected(department) {
    return department.id === this.selectedId;
  }
}
