import React from 'react';
import Recipe from './Recipe';
import { useNavigate } from 'react-router-dom';

const RecipeCard = (chef) => {
    let { genre, id, image, name, bio, likes, number_of_recipes, years_of_experience, recipes } = chef?.chef;
    let recipe = recipes?.map(recip => recip );
    console.log(chef?.chef?.genre);
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <img src={image} alt="" />
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
                <div className="mx-auto">
                    <button onClick={() => goBack()} className="btn btn-ghost mx-auto">Go Back</button>
                </div>
        </div>
    );
};

export default RecipeCard;