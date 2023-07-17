import React from 'react';
import Recipe from './Recipe';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './footer';

const RecipeCard = () => {
    const chef = useLoaderData();
    let { genre, id, image, name, bio, likes, number_of_recipes, years_of_experience, recipes } = chef;
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <Navbar />
            <div className="card w-full text-slate-700 shadow-xl mx-auto grid sm:grid-cols-2 gap-5 bg-slate-200">
                <div className="card-body">
                    <img className='rounded-xl' src={image} alt={name} />
                    <h2 className='card-title'>Genre: <span className='uppercase'>{genre}</span></h2>
                    <h2 className="card-title">Name: {name}</h2>
                    <h2 className="card-title">Bio: {bio}</h2>
                    <h2 className="card-title">Likes: {likes}</h2>
                    <h2 className="card-title">Years Of Experience: {years_of_experience}</h2>
                    <h2 className="card-title">Total Recipes: {number_of_recipes}</h2>
                </div>
                <div className=' grid grid-cols-1 gap-5 m-5'>
                    {
                        recipes?.map(recipe => <Recipe recipe={recipe} key={id} ></Recipe>)
                    }
                </div>
            </div>
            <div className="mx-auto p-20 w-80">
                <button onClick={() => goBack()} className="btn btn-ghost mx-auto">Go Back</button>
            </div>
            <Footer />
        </div>
    );
};

export default RecipeCard;