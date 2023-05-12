import React from 'react';
import Ingrediant from './Ingrediant';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({ recipe }) => {
    const showToastMessage = () => {
        toast("Added to favourites!");
    };
    const { cooking_method, ingredients, rating, recipe_name } = recipe;
    return (
        <div className="card card-compact w-80 mx-auto bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Recipe Name: {recipe_name}</h2>
                <h2 className="card-title">Cooking Method: {cooking_method}</h2>
                <h2 className="card-title">Rating: {rating}</h2>
                {
                    ingredients.map(ingredient => <Ingrediant ingredient={ingredient} ></Ingrediant>)
                }
                <div onClick={showToastMessage} className="btn btn-warning">Add to Favourites</div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Recipe;