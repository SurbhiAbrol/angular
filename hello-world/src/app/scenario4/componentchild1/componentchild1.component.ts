import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-componentchild1',
  templateUrl: './componentchild1.component.html',
  styleUrls: ['./componentchild1.component.scss']
})
export class Componentchild1Component implements OnInit {
@Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  fireEvent() {
    this.childEvent.emit('hello');
  }

}
