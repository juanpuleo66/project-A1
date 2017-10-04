import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tienda',
    templateUrl: 'tienda.component.html',
    styleUrls: ['tienda.component.css']
})
export class TiendaComponent implements OnInit {
    public titulo: string;
    public nombreDelParque: string;
    public tipoDeVegetacion: string;
    public metrosCuadrados: string;
    public miParque;

    constructor() {
        this.titulo = 'Tienda por Departamentos';
    }

    ngOnInit() {
    }

    mostrarNombre() {
        console.log(this.nombreDelParque);
    }

    datosParques(evento) {
        console.log(evento.nombre);
        this.miParque = evento;
    }
}