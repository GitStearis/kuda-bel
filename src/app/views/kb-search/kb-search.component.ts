import { Component, OnInit } from '@angular/core';

import { SearchService } from '../../services/search-service.service';

@Component({
  selector: 'kb-search',
  templateUrl: './kb-search.component.html',
  styleUrls: ['./kb-search.component.css']
})
export class KbSearchComponent implements OnInit {

  constructor(public searchService: SearchService) { }

  ngOnInit() {
    
    localStorage.setItem('loading', '0');
  }

  public loading(){
    return localStorage.getItem('loading') == '1' && !this.searchService.description;
  }

  public noResults(){
    return  this.searchService.error && localStorage.getItem('loading') != '1';
  }

  public needMoreInformation(){
    return false;
  }
}
