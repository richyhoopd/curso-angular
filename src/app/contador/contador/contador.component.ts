import { Component } from '@angular/core';

@Component({
  selector: 'app-contador', // el componente recibe dos parametros.
  template: `
    <h1>{{ titulo }}</h1>
    <h3>La base es: {{ base }}</h3>

    <button (click)="acumular(+base)">+{{ base }}</button>

    <span>{{ numero }}</span>
    <button (click)="acumular(-base)">-{{ base }}</button>
  `,
})
export class ContadorComponent {
  titulo: string = 'Niccus';
  numero: number = 10;

  // sumar() {
  //   this.numero += 1;
  // }

  // restar() {
  //   this.numero -= 1;
  // }
  base: number = 5;

  acumular(valor: number) {
    this.numero += valor;
  }
}
