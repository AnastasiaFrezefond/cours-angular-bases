import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cinquieme',
  template: '<h3>{{titre}}</h3><p> {{contenu}} </p><ul><li> {{liste[0]}} </li><li> {{liste[1]}} </li><li> {{liste[2]}} </li></ul>'
})

export class CinquiemeComponent { 
// dans la class nous allons ajouter des variables 
  titre : string = "titre du module";
  contenu : string = "lorem ipsum";
// {()} injecter une variable de class dans la vue => INTERPOLATION 
// Ressemble beaucoup à ce que l'on a fait hier concaténation 
  liste : Array<string> = ["Ajax","nodejs","Angular"];
}
