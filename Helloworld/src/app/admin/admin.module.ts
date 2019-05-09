import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [AdminComponent,UserComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
