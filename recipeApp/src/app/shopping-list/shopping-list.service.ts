import {Subject} from 'rxjs'

 
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    ingredientsChnaged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
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

      getIngredient(index: number) {
        return this.ingredients[index];
      }

      addIngredients(ingredients:Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChnaged.next(this.ingredients.slice());
      }

      updateIngredient(index : number , newIngredient:Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChnaged.next(this.ingredients.slice())

      }
      deleteIngredient( index: number) {
        this.ingredients.splice(index,1)
        this.ingredientsChnaged.next(this.ingredients.slice())
      }
    
}