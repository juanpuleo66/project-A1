import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-parques',
    templateUrl: 'parques.component.html',
    styleUrls: ['parques.component.css']
})
export class ParquesComponent {
    @Input() nombre: string;
    @Input('metrosCuadrados') metros: number;
    @Input() vegetacion: string;
    @Output() eventoParques = new EventEmitter(); 
    public abierto: boolean;

    constructor() {
        // this.nombre = 'Parque Natural Para Caballos';
        // this.metros = 450;
        // this.vegetacion = 'Alta';
        this.abierto = false;
    }

    emitirEvento() {
        this.eventoParques.emit({
            'nombre': this.nombre,
            'metros': this.metros,
            'vegetacion': this.vegetacion,
            'abierto': this.abierto
        });


    }
}