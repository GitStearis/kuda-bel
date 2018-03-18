import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { SearchService } from '../../services/search-service.service';

@Component({
  selector: 'survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  isLinear: boolean = true;
  thrashType: any;
  thrashSubtype: any;
  apiUrl: string = "http://kuda.gear.host/api/data/getMenuItems/";
  data: any = [];
  event: any = {};

  choise: any;

  constructor(public http: HttpClient, public searchService: SearchService) { }

  ngOnInit() {
    this.getMenuItems();
  }

  public getMenuItems() {
    return this.http
    .get(this.apiUrl)
    .map((data) => JSON.parse(JSON.stringify(data)))
    .subscribe((data) => {
      this.data = data.data;
    });
  }

  public getByActionId() {
    return this.http
    .get('http://kuda.gear.host/api/data/getByActionId/' + this.thrashSubtype.actionId)
    .map((data) => JSON.parse(JSON.stringify(data)))
    .subscribe((data) => {
      this.event = data.data.actionDescription;
    });
  }

  public confirm() {

  }
}
