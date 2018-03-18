import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'event-description',
  templateUrl: './event-description.component.html',
  styleUrls: ['./event-description.component.css']
})
export class EventDescriptionComponent implements OnInit {

  @Input()
  description: string;

  constructor() { }

  ngOnInit() {}

  public loading(){
    console.log(localStorage.getItem('loading'));
    return localStorage.getItem('loading') == '1';
  }

}
