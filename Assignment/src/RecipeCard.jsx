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
            <Navbar/>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                <img src={image} alt="" />
                <div className="card-body">
                    <h2 className="card-title">Genre: {genre}</h2>
                    <h2 className="card-title">Name: {name}</h2>
                    <h2 className="card-title">Bio: {bio}</h2>
                    <p>Likes: {likes}</p>
                    <p>Years Of Experience: {years_of_experience}</p>
                    <p>Total Recipes: {number_of_recipes}</p>
                    {
                        recipes?.map(recipe => <Recipe recipe={recipe} key={id} ></Recipe> )
                    }
                </div>
            </div>
                <div className="mx-auto w-80">
                    <button onClick={() => goBack()} className="btn btn-ghost mx-auto">Go Back</button>
                </div>
            <Footer/>
        </div>
    );
};

export default RecipeCard;