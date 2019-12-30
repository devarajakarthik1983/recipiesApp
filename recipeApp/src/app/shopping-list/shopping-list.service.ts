
import { EventEmitter } from '@angular/core';
 
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    ingredientsChnaged = new EventEmitter<Ingredient[]>();
   private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

      getIngredients() {
        return this.ingredients.slice();
      }

      addIngredident(ingredient:Ingredient) {
          this.ingredients.push(ingredient);
          this.ingredientsChnaged.emit(this.ingredients.slice());

      }

      addIngredients(ingredients:Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChnaged.emit(this.ingredients.slice());
      }
    
}