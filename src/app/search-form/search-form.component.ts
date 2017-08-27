import { Component, OnInit } from '@angular/core';
import { Search } from './search-form';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  vegtables = ['Carrots', 'Potatoes', 'Lettuce',
   'Pumpkins', 'Peas', 'Peppers', 'Squash', 'Beats' ];

   clickSearch() {
   	event.preventDefault();
   	console.log("works");
   }


}
