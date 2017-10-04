import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main-email',
    template: `
        <div class="container">
        <div class="row">

        <div class="col-md-6">
        <div class="panel panel-default" style="padding: 10px">
            <h3>{{title}}</h3>
            <app-mostrar-email></app-mostrar-email>
            <app-guardar-email></app-guardar-email>
        </div>
        </div>
        </div>
        </div>
    `
})
export class MainEmailComponent implements OnInit {
    public title: string = "main-email.component";

    ngOnInit() {
        console.log('ngOnInit-MainEmailComponent');
    }
}