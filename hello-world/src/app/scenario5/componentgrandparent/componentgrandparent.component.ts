import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componentgrandparent',
  templateUrl: './componentgrandparent.component.html',
  styleUrls: ['./componentgrandparent.component.scss']
})
export class ComponentgrandparentComponent implements OnInit {
  @Input() public parentData: any;
  constructor() { }

  ngOnInit() {
  }

}
