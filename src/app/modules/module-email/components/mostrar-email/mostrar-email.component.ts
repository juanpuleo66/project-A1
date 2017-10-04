import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
    selector: 'app-mostrar-email',
    template: `
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <span *ngIf="emailContact">
                        <h4>{{title}}</h4>
                        <strong>Correo de contacto: </strong>{{emailContact}}
                        <button (click)="onBorrarEmail()" class="btn btn-danger">Eliminar email de contacto</button>
                    </span>                          
                </div>
            </div>
        </div>
    `
})
export class MostrarEmailComponent implements DoCheck, OnInit {
    public title: string = "mostrar-email.component";
    public emailContact: string;

    ngOnInit() {
        this.emailContact = localStorage.getItem('emailContact');
    }

    ngDoCheck() {
        this.emailContact = localStorage.getItem('emailContact');
    }

    onBorrarEmail() {
        localStorage.removeItem('emailContact');
        localStorage.clear();
        this.emailContact = null;
    }
}