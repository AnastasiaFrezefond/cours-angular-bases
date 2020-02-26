// src/app/data.service.ts
// Créer une bdd en dur 
// Une class avec une methode get data 

export class DataService {

    getData()
        {
            return[
                {   id : 1, 
                    nom : "Article1",
                    status : true, 
                    date : "01/01/2020"
                },
                {   id : 2, 
                    nom : "Article2",
                    status : false, 
                    date : "01/01/2020"
                },
                {   id : 3, 
                    nom : "Article3",
                    status : true, 
                    date : "01/01/2020"
                }
            ];
        }
}

// Déclarer se service dans le fichier src/app.module.ts
// Importer 
// Ajouter la class dans provider
// On va utiliser les données 