import React from 'react';
import { Link } from 'react-router-dom';

const BannerChef = ({ chef }) => {
    const { name, years_of_experience, likes, number_of_recipes, genre, id } = chef;
    return (
        <div className='w-96 mx-auto m-5'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <div className="card-body text-xl font-semibold text-slate-600">
                        <h2 className="card-title">Name: {name}</h2>
                        <p>Genre: <span className='uppercase'>{genre}</span></p>
                        <p>Years Of Experience: {years_of_experience}</p>
                        <p>Total Recipes: {number_of_recipes}</p>
                        <p>Likes: {likes}</p>
                        <Link to={`/recipes/${genre}/${id}`}><button className="btn w-full mx-auto btn-warning">View Recipes</button></Link>
                    </div>
                </div> 
        </div>
    );
};

export default BannerChef;