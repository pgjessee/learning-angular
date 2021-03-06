import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'A Test Recipe', 'https://cdn.healthyrecipes101.com/wp-content/uploads/2019/12/Healthy-Ratatouille-Recipe.jpg'),
    new Recipe('Test Recipe', 'A Test Recipe', 'https://cdn.healthyrecipes101.com/wp-content/uploads/2019/12/Healthy-Ratatouille-Recipe.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
