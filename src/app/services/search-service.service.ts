import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import 'rxjs/add/observable/of';

import { Error } from "../models/error";
import { Organization } from "../models/organization";

@Injectable()
export class SearchService {

  apiUrl: string = "http://kuda-bel.azurewebsites.net/api/data/search/";

  error: Error;
  organizations: Observable<Organization[]>;
  description: Observable<string>;
  isSuccess: Observable<boolean>;
  
  constructor(public http: HttpClient) { }

  public sendRequiest(query: string) {
    localStorage.setItem('loading', '1');
    
    this.description = null;
    this.organizations = null;
    return this.http
      .get(this.apiUrl + query)
      .map((data) => JSON.stringify(data));
  }

  public search(query: string) {
    this.sendRequiest(query).subscribe((data) => this.checkResponse(JSON.parse(data)));
  }

  private checkResponse(response: any) {
    localStorage.setItem('loading', '0');
    console.log(response);
    if(response.success){
      this.description = Observable.of(response.data.actionDescription);
      this.organizations = Observable.of(response.data.organizations);
    }

    this.setError(response);
  }

  private setError(response: any) {
    this.error = {
      id: response.errorId,
      description: response.errorDescription
    };
  }
}
