import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'septieme',
  template: '<ul><li *ngFor ="let fruit of courses"> {{fruit}}</li> </ul><ul><li *ngFor ="let article of articles"> {{article.id}} - {{article.titre}}</li></ul>'
})

export class SeptiemeComponent{

  courses = ["pommes", "poires","ananas"];

  articles = [
    {titre : "articles", id:1},
    {titre : "articles 2", id:2},
  ]
}
