import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componentchild',
  templateUrl: './componentchild.component.html',
  styleUrls: ['./componentchild.component.scss']
})
export class ComponentchildComponent implements OnInit {
  @Input() public parentData;
  constructor() { }

  ngOnInit() {
  }

}
