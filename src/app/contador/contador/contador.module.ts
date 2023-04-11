import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContadorComponent } from "./contador.component";

@NgModule({
    declarations: [
        ContadorComponent, // los modulos normalmente son privados
    ],
    exports: [
        ContadorComponent // aqui se mostrara fuera del modulo
    ],
    imports: [
        CommonModule
    ]
})

export class ContadorModule {};