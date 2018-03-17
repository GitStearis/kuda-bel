import { Component, OnInit, Input } from '@angular/core';

import { Organization } from "../../models/organization";

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  organizations: Organization[];

  constructor() { }

  ngOnInit() {
  }

}
