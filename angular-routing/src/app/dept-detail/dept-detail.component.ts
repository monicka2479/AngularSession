import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-dept-detail',
  template: `
    <h3>You have selected department Id {{departmentId}}</h3>
    <a (click)='previous()'>Previous</a> <br/>
    <a (click)='next()'>Next</a>
  `,
  styles: []
})
export class DeptDetailComponent implements OnInit {

  public departmentId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
   // this.departmentId = parseInt(this.route.snapshot.paramMap.get('id'));
   this.route.paramMap.subscribe((params:ParamMap) =>{
     let id= parseInt(params.get("id"));
     this.departmentId = id;
   })
  }

  previous() {
    let peviousId = this.departmentId - 1;
    this.router.navigate(["/dept-list", peviousId ]);
  }
  next() {
    let nextId = this.departmentId + 1;
    this.router.navigate(["/dept-list", nextId ]);
  }

}
