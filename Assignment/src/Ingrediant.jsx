import React from 'react';

const Ingrediant = ({ingredient}) => {
    const {name, quantity} = ingredient || ingredient[0];
    console.log(ingredient);
    return (
        <div className="card card-compact w-72 mx-auto bg-base-100 shadow-xl">
        <div className="card-body">
            <h2 className="card-title">Ingredient Name: {name}</h2>
            <h2 className="card-title">Quantity: {quantity}</h2>
        </div>
    </div>
    );
};

export default Ingrediant;