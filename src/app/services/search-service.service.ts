import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import "rxjs/add/operator/map"

import { Error } from "../models/error";

@Injectable()
export class SearchServiceService {

  apiUrl: string = "http://kuda.gear.host/api/data/search/";

  error: Error;
  isSuccess: boolean = false;
  
  constructor(public http: HttpClient) { }

  public sendRequiest(query: string) {
    return this.http
    .get(this.apiUrl + query)
    .map((data) => JSON.stringify(data));
  }
  // name, description, image, website, phoneOne, phoneTwo, address
}
