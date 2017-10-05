import { Component } from '@angular/core';

@Component({
    selector: 'app-admin-list',
    templateUrl: 'list.component.html'
})
export class ListComponent {
    public title: string = 'Listado';
    // public numbers = [0,1,2,3,4];
    numbers = new Array(5);

}