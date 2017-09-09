import { Component, OnChanges, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnChanges, OnInit, OnDestroy{
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    constructor() {}
    ngOnChanges() {}
    ngOnInit() {}
    ngOnDestroy() {}
}