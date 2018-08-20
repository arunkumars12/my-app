import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HerosComponent } from './heros/heros.component';
import { App1Component } from './app1/app1.component';
import { Globals } from './global';


@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    App1Component
  ],
  imports: [
    
    BsDropdownModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ModalModule.forRoot()

  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
