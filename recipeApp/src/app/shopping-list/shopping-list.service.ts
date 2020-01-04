import {Subject} from 'rxjs'

 
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    ingredientsChnaged = new Subject<Ingredient[]>();
   private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

      getIngredients() {
        return this.ingredients.slice();
      }

      addIngredident(ingredient:Ingredient) {
          this.ingredients.push(ingredient);
          this.ingredientsChnaged.next(this.ingredients.slice());

      }

      addIngredients(ingredients:Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChnaged.next(this.ingredients.slice());
      }
    
}