import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Componentchild1Component } from './componentchild1/componentchild1.component';
import { Componentparent1Component } from './componentparent1/componentparent1.component';

@NgModule({
  declarations: [Componentchild1Component, Componentparent1Component],
  imports: [
    CommonModule
  ],
    exports: [Componentchild1Component, Componentparent1Component]
})
export class Scenario4Module { }
