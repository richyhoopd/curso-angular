import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe.component";
import { ListadoComponent } from "./listado/listado.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        HeroeComponent, // los modulos normalmente son privados
        ListadoComponent
    ],
    exports: [
        ListadoComponent // aqui se mostrara fuera del modulo
    ],
    imports: [
        CommonModule
    ]
})

export class HeroesModule {};