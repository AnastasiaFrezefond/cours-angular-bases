// src/app/premier.component.ts

// la class sera onligatoirement nommée comme le fichier
// Comme on va l'utiliser ailleurs on va devoir l'exporter 

// Comment transformer cette class en composant Angular 
import { Component } from "@angular/core" ;

// On va décorer notre component 
@Component ({
    selector : "premier",
    template : "<p> Mon premier composant </p>"
})

export class PremierComponent { }

// brique de base pour créer une application Angular 

// maintenant que le composant est finalisé 
// je vais l'intégrer dans la page web 
// src/app/app.module.ts
// src/app/app.component.html