import React from 'react';
import Chef from './Chef';

const AllChef = (chefs) => {
    const chefsDetail = chefs.chef.map(individualChef => individualChef);
    return (
        <div className='grid justify-center items-center gap-5 my-10'>
            {
                chefsDetail.map(chef => <Chef chef={chef}></Chef>)
            }
        </div>
    );
};

export default AllChef;