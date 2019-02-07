import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cardcomponent',
  templateUrl: './cardcomponent.component.html',
  styleUrls: ['./cardcomponent.component.css']
})
export class CardcomponentComponent implements OnInit {

  @Input()
  imageName: string;
  @Input()
  imageUrl: string;
  constructor() { }

  ngOnInit() {
  }

}
