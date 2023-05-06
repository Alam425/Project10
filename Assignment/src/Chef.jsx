import React from 'react';
import { Link } from 'react-router-dom';

const Chef = (chef) => {
    // const 
    const { name, image, years_of_experience, likes, number_of_recipes, id, genre } = chef.chef;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Years Of Experience: {years_of_experience}</p>
                    <p>Total Recipes: {number_of_recipes}</p>
                    <p>Likes: {likes}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to={`/${genre}/${id}`}>View Recipes</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef;