import {useEffect, useState} from "react";
import {loadAuthResource, refresh} from "../../services/api.service.ts";
import type {IRecipe, IRecipesObjModel} from "../../models/IRecipe.ts";
import {RecipeItem} from "../recipe-item/RecipeItem.tsx";

export const RecipesList = () => {
    const [recipes, setRecipes] = useState<IRecipe[]>([]);

    useEffect(() => {

        // виклик універсальної функції для завантаження даних про рецепти із захищеного ресурсу
        // <IRecipesObjModel> - зазначення типу даних, які очікуються від api
        // /recipes - ендпоінт, на який відправляється GET запит
        loadAuthResource<IRecipesObjModel>("/recipes")
            // у разі успішності запиту
            .then(data => {
                // масив рецептів зберігається у стейт компоненту
                setRecipes(data.recipes);
                console.log(data.recipes);
            })
            // у разі помилки (зокрема протермінування accessToken)
            .catch(reason => {
                // виводиться інформація про помилку у консоль
                console.log(reason);
                // спроба відновити accessToken за допомогою refreshToken
                refresh()
                    // після успішного оновлення токену відправляється повторний запит на отримання рецептів і, у разі його успішності, - запис у стейт компоненту
                    .then(() => loadAuthResource<IRecipesObjModel>("/recipes"))
                    .then(data => setRecipes(data.recipes));
            });
    }, []);

    return (
        <>
            <h1 className="my-8 text-[30px] text-center">Recipes List</h1>
            <ul className="grid grid-cols-2 gap-4">
                {
                    recipes.map((recipe) => (
                        <RecipeItem key={recipe.id} recipe={recipe}/>
                    ))
                }
            </ul>
        </>
    );
};
