import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Scenario1Module } from './scenario1/scenario1.module';
import { from } from 'rxjs';
import { Scenario2Module } from './scenario2/scenario2.module';
import { ComponentchildComponent } from './scenario3/componentchild/componentchild.component';
import { ComponentparentComponent } from './scenario3/componentparent/componentparent.component';
import { Scenario3Module } from './scenario3/scenario3.module';
import { Scenario4Module } from './scenario4/scenario4.module';
import { Scenario5Module } from './scenario5/scenario5.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Scenario1Module,
    Scenario2Module,
    Scenario3Module,
    Scenario4Module,
    Scenario5Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }