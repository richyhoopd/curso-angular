import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
// @Input('data') personajes: Personaje[] = [];
// el input es llamado data desde otros archivos, por que es el nombre que le dimos dentro de
get personajes() {
  return this.dbzService.personajes;
}


constructor( private dbzService: DbzService) {}

}
