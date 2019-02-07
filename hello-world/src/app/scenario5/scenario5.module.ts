import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentgrandparentComponent } from './componentgrandparent/componentgrandparent.component';
import { Componentparent2Component } from './componentparent2/componentparent2.component';
import { Componentchild2Component } from './componentchild2/componentchild2.component';

@NgModule({
  declarations: [ComponentgrandparentComponent, Componentparent2Component, Componentchild2Component],
  imports: [
    CommonModule
  ],
  exports: [ComponentgrandparentComponent, Componentparent2Component, Componentchild2Component]
})
export class Scenario5Module { }
