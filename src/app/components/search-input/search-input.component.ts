import { Component, OnInit } from '@angular/core';

import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  placeholder = 'Что вы хотите выбросить?';
  value = '';

  constructor() { }

  ngOnInit() {
  }

  public clear() {
    this.value = '';
  }

  public search() {
    console.log('pow');
  }

  public onKeydown(event: any) {
    if (event.key === "Enter" || this.value.length >= 3) {
      this.search();
    }
  }

}
