import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-dept-detail',
  template: `

    <a class="btn btn-info" (click)='info()'>Info</a>
    <a class="btn btn-success" (click)='contact()'>Contact</a>
    <router-outlet></router-outlet>

    <h3>You have selected department Id {{departmentId}}</h3>

    <p>
    <a class="btn btn-warning" (click)='previous()'>Previous</a>
    <a class="btn btn-warning" (click)='next()'>Next</a>
    </p>
    <p>
    <button class="btn btn-primary" (click)='goBack()'>Back</button>
   </p>
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

  info() {
    let peviousId = this.departmentId - 1;
    //this.router.navigate(["/dept-list", peviousId ]);
    this.router.navigate(['dept-info'], {relativeTo: this.route});
  }

  contact() {
    let nextId = this.departmentId + 1;
    //this.router.navigate(["/dept-list", nextId ]);
    this.router.navigate(['dept-contact'], {relativeTo: this.route});
  }


  previous() {
    let peviousId = this.departmentId - 1;
    //this.router.navigate(["/dept-list", peviousId ]);
    this.router.navigate(['../', {id:peviousId}], {relativeTo: this.route});
  }

  next() {
    let nextId = this.departmentId + 1;
    //this.router.navigate(["/dept-list", nextId ]);
    this.router.navigate(['../', {id:nextId}], {relativeTo: this.route});
  }

  goBack() {
    let selectedId = this.departmentId ? this.departmentId : null;
    //this.router.navigate(['/dept-list', {'id': selectedId}]);
    this.router.navigate(['../', {id:selectedId}], {relativeTo: this.route});
  }

}
