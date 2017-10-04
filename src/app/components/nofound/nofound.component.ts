import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nofound',
    templateUrl: 'nofound.component.html'
})
export class NoFoundComponent {
    public titulo: string = 'nofound.component';

    ngOnInit() {
        console.log(this.titulo +' cargado');
    }
}