import React from 'react';
import { Link, useParams } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const Chef = (chef) => {
    const { name, image, years_of_experience, likes, number_of_recipes, id } = chef.chef; 
    const {ids} = useParams();
    return (
        <div>
            {chef.chef ?
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <img src={image} alt={name} />
                    <div className="card-body">
                        <h2 className="card-title">Name: {name}</h2>
                        <p>Years Of Experience: {years_of_experience}</p>
                        <p>Total Recipes: {number_of_recipes}</p>
                        <p>Likes: {likes}</p>
                        <button className="btn btn-warning">
                            <Link to={`/recipes/genre/${id}`}>View Recipes</Link>
                        </button>
                    </div>
                </div> :
                ''}
        </div>
    );
};

export default Chef;