import { Component, OnInit } from '@angular/core';

// Pour utiliser le service 
//.. Pour remonter jusqu'au parent 
import { DataService } from "../data-service";

@Component({
  selector: 'huitieme',
  templateUrl: './huitieme.component.html',
  styleUrls: ['./huitieme.component.css']
})
export class HuitiemeComponent { 

    articles ; // variable de class
  
    constructor(service : DataService) {
      this.articles = service.getData;
    }
}
