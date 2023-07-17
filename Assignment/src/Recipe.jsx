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
        <div className="card card-compact w-96 mx-auto bg-slate-300">
            <div className="card-body">
                <h2 className="font-semibold">Recipe Name: <span className='text-xl'>{recipe_name}</span></h2>
                <h2 className="font-semibold">Cooking Method: {cooking_method}</h2>
                <h2 className="font-semibold">Rating: {rating}</h2>
                {
                    ingredients.map(ingredient => <Ingrediant ingredient={ingredient} ></Ingrediant>)
                }
                <div onClick={showToastMessage} className="btn btn-warning font-semibold">Add to Favourites</div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Recipe;