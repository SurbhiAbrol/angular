import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentparent',
  templateUrl: './componentparent.component.html',
  styleUrls: ['./componentparent.component.scss']
})
export class ComponentparentComponent implements OnInit {
  title = 'Scenario3';

  title1 = 'Enter specific name: ';

  public user = 'Surbhi';

  constructor() { }

  ngOnInit() {}
}
