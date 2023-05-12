import { Link } from 'react-router-dom';
import React from 'react';

const Chef = ({ chef }) => {
    const { name, image, years_of_experience, likes, number_of_recipes, id, genre } = chef;
    return (
        <div className='w-96 mx-auto mb-10'>
            {chef ?
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <img src={image} alt={name} />
                    <div className="card-body">
                        <h2 className="card-title">Name: {name}</h2>
                        <p>Years Of Experience: {years_of_experience}</p>
                        <p>Total Recipes: {number_of_recipes}</p>
                        <p>Likes: {likes}</p>
                        <Link to={`/recipes/${genre}/${id}`}><button className="btn w-80 mx-auto btn-warning">View Recipes</button></Link>
                    </div>
                </div> :
                ''}
        </div>
    );
};

export default Chef;