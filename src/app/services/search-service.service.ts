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

  error: Observable<Error>;
  organizations: Observable<Organization[]>;
  description: Observable<string>;
  isSuccess: Observable<boolean>;
  
  constructor(public http: HttpClient) { }

  public sendRequiest(query: string) {
    return this.http
    .get(this.apiUrl + query)
    .map((data) => JSON.stringify(data));
  }

  public search(query: string) {
    this.sendRequiest(query).subscribe((data) => this.checkResponse(JSON.parse(data)));
  }

  private checkResponse(response: any) {
    this.isSuccess = response.success;
    if (this.isSuccess) {
      this.parseResponse(response);
    }
    this.saveError(response);
  }

  private parseResponse(response: any) {
    console.log(response);
    this.description = Observable.of(response.data.actionDescription);
    this.organizations = Observable.of(response.data.organizations);
  }

  private saveError(response: any) {
    this.error = Observable.of({
      id: response.errorId,
      description: response.errorDescription
    });
  }
}
