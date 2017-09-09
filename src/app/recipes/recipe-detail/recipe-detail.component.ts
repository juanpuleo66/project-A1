import { Component, OnChanges, OnInit, OnDestroy, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnChanges, OnInit, OnDestroy {
    @Input() propertyRecipeDetail: Recipe; 

    constructor() {}
    ngOnChanges() {
        console.error('Error');
        console.error(this.propertyRecipeDetail);
    }
    ngOnInit() {}
    ngOnDestroy() {}
}