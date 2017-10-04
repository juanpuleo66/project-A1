import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-animals',
    templateUrl: 'animals.component.html'
})
export class AnimalsComponent implements OnInit {
    public titulo: string = 'animals.component';
    
    ngOnInit() {
        console.log(this.titulo +' cargado');
    }

}