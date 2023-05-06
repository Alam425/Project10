import React, { useState } from 'react';
import Chef from './Chef';

const AllChef = (chefs) => {
    const [chef, setChef] = useState([]);
    const chefDetail = chefs.chef.map(individualChef => individualChef);
    setChef(chefDetail);
    return (
        <div>
            {
                // <Chef chef={chef} ></Chef>
            }
        </div>
    );
};

export default AllChef;