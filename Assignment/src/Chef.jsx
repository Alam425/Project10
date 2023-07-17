import { Link } from 'react-router-dom';
import React from 'react';

const Chef = ({ chef }) => {
    const { name, image, years_of_experience, likes, number_of_recipes, id, genre } = chef;
    return (
        <div className='w-72 mx-auto m-3'>
                <div className="card card-compact w-72 bg-base-100 shadow-xl">
                    <div className='h-60'>
                        <img className='w-full h-full rounded-xl' src={image} alt={name} />
                    </div>
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

export default Chef;