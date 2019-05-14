import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingConstant } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeptDetailComponent } from './dept-detail/dept-detail.component';
import { DeptInfoComponent } from './dept-info/dept-info.component';
import { DeptContactComponent } from './dept-contact/dept-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingConstant,
    PageNotFoundComponent,
    DeptDetailComponent,
    DeptInfoComponent,
    DeptContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
