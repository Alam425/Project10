import React from 'react';

const Ingrediant = ({ingredient}) => {
    const {name, quantity} = ingredient || ingredient[0];
    return (
        <div className="card card-compact w-80 mx-auto shadow-xl bg-slate-200">
        <div className="card-body">
            <h2 className="font-semibold">Ingredient Name: {name}</h2>
            <h2 className="font-semibold">Quantity: {quantity}</h2>
        </div>
    </div>
    );
};

export default Ingrediant;