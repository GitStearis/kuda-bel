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
    this.organizations = [
      {
        name: 'Итранзишн',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
        logoUrl: 'https://about.canva.com/wp-content/uploads/sites/3/2016/08/Band-Logo.png',
        siteUrl: 'https://blog.thoughtram.io/angular/2016/10/13/two-way-data-binding-in-angular-2.html',
        phoneOne: '+375447937743',
        phoneTwo: '+375336679472',
        address: 'ул.Кульман 1'
      },
      {
        name: 'string',
        description: 'string',
        logoUrl: 'https://about.canva.com/wp-content/uploads/sites/3/2016/08/Band-Logo.png',
        siteUrl: 'https://blog.thoughtram.io/angular/2016/10/13/two-way-data-binding-in-angular-2.html',
        phoneOne: 'string',
        phoneTwo: 'string',
        address: 'string'
      }
    ];
  }

}
