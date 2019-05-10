import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/route';

@Component({
  selector: 'app-dept-detail',
  template: `
    <h3>You have selected department Id {{departmentId}}</h3>
  `,
  styles: []
})
export class DeptDetailComponent implements OnInit {

  public departmentId;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    departmentId = parseInt(this.route.snapshot.paramMap.get('id'));

  }

}
