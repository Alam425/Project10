import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from './Recipe';

const RecipeCard = () => {
    const chef =  useLoaderData();
    const { genre, id, image, name, bio, likes, number_of_recipes, years_of_experience, recipes } = chef;
    let recipe = recipes.map(recip => recip);
    console.log(recipe);
    return (
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Genre: {genre}</h2>
                    <h2 className="card-title">Name: {name}</h2>
                    <h2 className="card-title">Bio: {bio}</h2>
                    <p>Likes: {likes}</p>
                    <p>Years Of Experience: {years_of_experience}</p>
                    <p>Total Recipes: {number_of_recipes}</p>
                    <Recipe recipe={recipe} key={id} ></Recipe>
                </div>
            </div>
    );
};

export default RecipeCard;