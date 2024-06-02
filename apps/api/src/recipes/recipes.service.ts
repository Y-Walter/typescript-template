import { NewRecipeInput } from "@/recipes/dto/new-recipe.input";
import { RecipesArgs } from "@/recipes/dto/recipes.args";
import { Recipe } from "@/recipes/models/recipe.model";
import { Injectable } from "@nestjs/common";

@Injectable()
export class RecipesService {
  private readonly defaultDate = new Date(2024, 4, 1, 0, 0, 0, 0);
  private readonly recipes: Recipe[] = [
    {
      id: "1",
      title: "Custard Pudding",
      description: "How to make custard pudding",
      creationDate: this.defaultDate,
      ingredients: ["egg", "milk", "sugar"],
    },
    {
      id: "2",
      title: "Chocolate Pudding",
      description: "How to make chocolate pudding",
      creationDate: this.defaultDate,
      ingredients: ["egg", "milk", "sugar", "cocoa"],
    },
    {
      id: "3",
      title: "Baked Pudding",
      description: "How to make baked pudding",
      creationDate: this.defaultDate,
      ingredients: ["egg", "milk", "sugar"],
    },
  ];

  async create(data: NewRecipeInput): Promise<Recipe> {
    const maxId = Math.max(
      ...this.recipes.map((recipe) => parseInt(recipe.id, 10))
    );
    const newId = (maxId + 1).toString();
    const newRecipe = {
      id: newId,
      creationDate: new Date(),
      ...data,
    };
    this.recipes.push(newRecipe);
    return newRecipe;
  }

  async findOneById(id: string): Promise<Recipe> {
    const recipe = this.recipes.find((recipe) => recipe.id === id);
    if (!recipe) {
      throw new Error("Recipe not found");
    }
    return recipe;
  }

  async findAll({ skip, take }: RecipesArgs): Promise<Recipe[]> {
    const recipeSize = this.recipes.length;
    if (skip >= recipeSize) {
      return [];
    }
    const takeCount = Math.min(take, recipeSize - skip);
    return this.recipes.slice(skip, skip + takeCount);
  }

  async remove(id: string): Promise<boolean> {
    const recipeIndex = this.recipes.findIndex((recipe) => recipe.id === id);

    if (recipeIndex === -1) {
      return false;
    }
    try {
      this.recipes.splice(recipeIndex, 1);
    } catch (error) {
      return false;
    }
    return true;
  }
}
