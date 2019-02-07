import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentparentComponent } from './componentparent/componentparent.component';
import { ComponentchildComponent } from './componentchild/componentchild.component';

@NgModule({
  declarations: [ComponentparentComponent, ComponentchildComponent],
  imports: [
    CommonModule
  ],
  exports: [ComponentparentComponent, ComponentchildComponent]
})
export class Scenario3Module { }
