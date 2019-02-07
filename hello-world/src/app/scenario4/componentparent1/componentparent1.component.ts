import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentparent1',
  templateUrl: './componentparent1.component.html',
  styleUrls: ['./componentparent1.component.scss']
})
export class Componentparent1Component implements OnInit {
public message = '';
  constructor() { }

  ngOnInit() {
  }

}
