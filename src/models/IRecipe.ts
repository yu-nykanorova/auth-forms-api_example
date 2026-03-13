export interface IRecipesObjModel {
    recipes: IRecipe[];
    total: number;
    skip: number;
    limit: number;
}

export interface IRecipe {
	cookTimeMinutes: number;
	difficulty: string;
	image: string;
	servings: number;
	prepTimeMinutes: number;
	reviewCount: number;
	name: string;
	caloriesPerServing: number;
	rating: number;
	cuisine: string;
	id: number;
	userId: number;
    ingredients: string[],
    instructions: string[],
    tags: string[],
    mealType: string[]
}
