import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A test Recipy" , "This is a simple test" , "http://static.fjcdn.com/large/pictures/8c/f1/8cf17f_5546949.jpg"),
    new Recipe("A test Recipy" , "This is a simple test" , "http://static.fjcdn.com/large/pictures/8c/f1/8cf17f_5546949.jpg"),
    new Recipe("A test Recipy" , "This is a simple test" , "http://static.fjcdn.com/large/pictures/8c/f1/8cf17f_5546949.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
