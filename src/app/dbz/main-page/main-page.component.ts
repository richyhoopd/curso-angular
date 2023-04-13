import { Component } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";
import { DbzService } from "../services/dbz.service";
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',

})

export class MainPageComponent  {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'vegeta',
      poder: 8000
    }
  ]

  nuevo: Personaje = {
    nombre: 'cacas',
    poder: 1000
  }

  agregarNuevoPersonaje( argumento: Personaje ) {
    this.personajes.push( argumento );
  }

  constructor( private dbzService: DbzService) {

  }

}
