import React from 'react';
import Ingrediant from './Ingrediant';

const Recipe = (recipes) => {
    const {cooking_method, ingredients, rating, recipe_name} = recipes.recipe || recipes.recipe[0];
    const ingredient = (recipes.recipe.ingredients || recipes.recipe[0].ingredients).map(i => i);
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Recipe Name: {recipe_name}</h2>
                    <h2 className="card-title">Cooking Method: {cooking_method}</h2>
                    <h2 className="card-title">Rating: {rating}</h2>
                    <Ingrediant ingredient={ingredient} ></Ingrediant>
                </div>
            </div>
    );
};

export default Recipe;