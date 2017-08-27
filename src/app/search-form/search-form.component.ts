import { Component, OnInit } from '@angular/core';
import { Search } from './search-form';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  constructor(private server: ServerService) { }

  ngOnInit() {
    // var that = this;
    // setTimeout(function() {
    //   that.vegtables = ["carrots", "peas"]

    // }, 3000)


    this.server.getVegtables().subscribe((vegtables) => {
      this.vegtables = vegtables.body;
      console.log(vegtables);
    }); 
  }

  veggie:string

  vegtables:any = [];

   clickSearch(event) {
     event.preventDefault();
     alert(this.veggie);

   }

   onChange(veggie) {
     this.veggie = veggie;
     console.log(veggie.name);
   }

}
