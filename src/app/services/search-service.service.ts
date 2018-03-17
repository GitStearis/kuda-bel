import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import "rxjs/add/operator/map"

import { Error } from "../models/error";
import { Organization } from "../models/organization";

@Injectable()
export class SearchService {

  apiUrl: string = "https://kuda.gear.host/api/data/search/";

  error: Error;
  isSuccess: boolean = false;
  organizations: Organization[] = [];
  
  constructor(public http: HttpClient) { }

  public sendRequiest(query: string) {
    return this.http
    .get(this.apiUrl + query)
    .map((data) => JSON.stringify(data));
  }

  public search(query: string) {
    this.sendRequiest(query).subscribe((data) => {
      const response = JSON.parse(data);
      console.log(response);
    });
  }
}
