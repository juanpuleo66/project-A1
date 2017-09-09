import { Component, OnChanges, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnChanges, OnInit, OnDestroy {
    @Input() propertyRecipeItem;
    @Output() eventRecipeItem = new EventEmitter<Recipe>();

    constructor() {}
    ngOnChanges() {}
    ngOnInit() {}
    ngOnDestroy() {}

    onClickRecipeItem(recipe: Recipe) {
        this.eventRecipeItem.emit(recipe);
    }
}