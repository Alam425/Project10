import React from 'react';
import Ingrediant from './Ingrediant';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({recipe}) => {
    const showToastMessage = () => {
        toast.success('Success Notification !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };
    const {cooking_method, ingredients, rating, recipe_name} = recipes?.recipe;
    const ingredient = (recipes.recipe.ingredients || recipes.recipe[0].ingredients).map(i => i);
    console.log(recipe);
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Recipe Name: {recipe_name}</h2>
                    <h2 className="card-title">Cooking Method: {cooking_method}</h2>
                    <h2 className="card-title">Rating: {rating}</h2>
                    <Ingrediant ingredient={ingredient} ></Ingrediant>
                    <div onClick={()=>showToastMessage()} className="btn btn-warning">Add to Favourites</div>
                </div>
            </div>
    );
};

export default Recipe;