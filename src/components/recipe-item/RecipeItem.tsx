import type {FC} from "react";
import type {IRecipe} from "../../models/IRecipe.ts";

type RecipeProps = {
    recipe: IRecipe;
};

export const RecipeItem: FC<RecipeProps> = ({recipe}) => {
    return (
        <li className="py-6 bg-white shadow=sm rounded-md">
            <p className="px-6 py-2 text-[20px] text-right font-semibold bg-pink-100">ID: {recipe.id}</p>
            <div className="px-6">
                <div className="mt-2 flex items-center justify-center">
                    <img className="max-w-50" src={recipe.image} alt={recipe.name}/>
                </div>
                <div>
                    <h2 className="mb-2 text-[26px]">{recipe.name}</h2>
                    <p className="mb-1 font-semibold">Ingredients:</p>
                    <ul className="mb-2">
                        {
                            recipe.ingredients.map((ingredient: string, index: number) => (
                                <li key={index}>{ingredient}</li>
                            ))
                        }
                    </ul>
                    <p className="mb-1 font-semibold">Instructions:</p>
                    <ul className="mb-2">
                        {
                            recipe.instructions.map((instruction: string, index: number) => (
                                <li key={index}>{index+1}) {instruction}</li>
                            ))
                        }
                    </ul>
                    <p className="mt-2 text-[20px] font-semibold">Cuisine: <span className="text-pink-800">{recipe.cuisine}</span></p>
                </div>
            </div>
        </li>
    );
};
