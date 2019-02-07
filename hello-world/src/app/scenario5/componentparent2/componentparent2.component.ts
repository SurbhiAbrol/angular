import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-componentparent2',
  templateUrl: './componentparent2.component.html',
  styleUrls: ['./componentparent2.component.scss']
})
export class Componentparent2Component implements OnInit {
   @Output() secondChildEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
   parentFire(msg) {
     this.secondChildEvent.emit(msg);
   }
}
