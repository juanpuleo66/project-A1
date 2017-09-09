import { Component, OnChanges, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnChanges, OnInit, OnDestroy {
    @Output() eventRecipeList = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('First test recipe', 
            'First test recipe description', 
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
        ),
        new Recipe('Second test recipe', 
            'Second test recipe description', 
            'https://c1.staticflickr.com/1/750/32627280483_c474bae914_b.jpg'
        ),
        new Recipe('Third test recipe',
            'Third test recipe description',
            'http://lavia0.tripod.com/imagelib/sitebuilder/layout/recipebox.gif'
        )
    ];

    constructor() {}
    ngOnChanges() {}
    ngOnInit() {}
    ngOnDestroy() {}

    onClickListComponent(parametro: Recipe) {
        this.eventRecipeList.emit(parametro);
    }
}