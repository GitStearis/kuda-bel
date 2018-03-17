import { Component, OnInit, Input } from '@angular/core';

import { Organization } from "../../models/organization";

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input()
  organization: Organization;

  constructor() { }

  ngOnInit() {
  }

}
