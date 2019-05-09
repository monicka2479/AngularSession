import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { EventComponent } from './event/event.component';
import { TrvComponent } from './trv/trv.component';
import { TwbComponent } from './twb/twb.component';
import {FormsModule} from '@angular/forms';
import { TestComponent } from './test/test.component';
import { PipeComponent } from './pipe/pipe.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EventComponent,
    TrvComponent,
    TwbComponent,
    TestComponent,
    PipeComponent,
    EmpListComponent,
    EmpDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
