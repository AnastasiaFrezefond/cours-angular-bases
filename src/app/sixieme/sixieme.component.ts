import { Component, OnInit } from '@angular/core';

interface Detail{
  duree : number,
  unite : string,
  lieu : string
}

@Component({
  selector: 'sixieme',
  template: '<h3>{{information}}</h3><p> Je suis une formation dune durée de {{detail.duree}} {{detail.unite}} à {{detail.lieu}} </p>'
})

export class SixiemeComponent{
  information : string = " Formation Angular ";

  detail :any = {
    duree : 2,
    unite : "mois",
    lieu : "Paris"
  };
}
