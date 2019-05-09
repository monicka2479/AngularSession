import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpListComponent } from './emp-list/emp-list.component';
import { DeptListComponent } from './dept-list/dept-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/dept-list', pathMatch: 'full' },
  { path: 'dept-list', component: DeptListComponent },
  { path: 'emp-list', component: EmpListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingConstant = [
    DeptListComponent, EmpListComponent, PageNotFoundComponent
  ];
