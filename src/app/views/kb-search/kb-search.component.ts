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
  }

}
