import { Component } from "@angular/core";



@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {

    nombre: string = 'Ironman';
    edad: number = 15;

    get nombreCapitalizado():string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre():void {
        this.nombre = 'spiderman';
    }

    cambiarEdad():void {
        console.log('hey')
        this.edad = 30;
    }
}

// la mayoria del tiempo se recomienda solo trabajar con one way data binding ;)