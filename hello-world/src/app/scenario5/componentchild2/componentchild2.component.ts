import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-componentchild2',
  templateUrl: './componentchild2.component.html',
  styleUrls: ['./componentchild2.component.scss']
})
export class Componentchild2Component implements OnInit {
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  fireEvent(myvalue) {
    this.childEvent.emit(myvalue);
  }

}
