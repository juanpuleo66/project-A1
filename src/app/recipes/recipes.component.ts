import { Component, OnChanges, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html', 
    styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnChanges, OnInit, OnDestroy {
    public recipeSelected: Recipe

    constructor() {}
    ngOnChanges() {}
    ngOnInit() {}
    ngOnDestroy() {}

    onClickRecipes(parametro: Recipe ) {
        this.recipeSelected = parametro;
    }
}