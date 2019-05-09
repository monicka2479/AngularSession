import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpListComponent } from './emp-list/emp-list.component';
import { DeptListComponent } from './dept-list/dept-list.component';

const routes: Routes = [
  { path: 'dept-list', component: DeptListComponent },
  { path: 'emp-list', component: EmpListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingConstant = [
    DeptListComponent, EmpListComponent
  ];
