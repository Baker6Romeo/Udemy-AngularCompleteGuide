import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test Description', 'https://cdn.stocksnap.io/img-thumbs/960w/food-burger_WYL5KWIPUD.jpg'),
    new Recipe('Test Recipe 2', 'Test Description 2', 'https://cdn.stocksnap.io/img-thumbs/960w/food-burger_WYL5KWIPUD.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
