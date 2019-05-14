import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpListComponent } from './emp-list/emp-list.component';
import { DeptListComponent } from './dept-list/dept-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeptDetailComponent } from './dept-detail/dept-detail.component';
import { DeptContactComponent } from './dept-contact/dept-contact.component';
import { DeptInfoComponent } from './dept-info/dept-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/dept-list', pathMatch: 'full' },
  { path: 'dept-list', component: DeptListComponent },
  { path: 'dept-list/:id', component: DeptDetailComponent },
  {
    path: 'dept-list/:id',
    component: DeptDetailComponent,
    children: [
      {path: 'dept-info', component: DeptInfoComponent},
      {path: 'dept-contact', component: DeptContactComponent},
    ]
  },
  { path: 'emp-list', component: EmpListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingConstant = [
    DeptListComponent, EmpListComponent, PageNotFoundComponent, DeptDetailComponent
  ];
