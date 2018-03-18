import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { MatInputModule } from '@angular/material/input';

import { SearchService } from '../../services/search-service.service';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  placeholder = 'Что вы хотите выбросить?';
  value = '';

  constructor(public searchService: SearchService) { }

  ngOnInit() {
  }

  public search() {
    this.searchService.search(this.value, this.value.length);
  }

  public onKeyUp(event: any) {
    if (event.key === "Enter") {
      this.search();
    }
  }
}
