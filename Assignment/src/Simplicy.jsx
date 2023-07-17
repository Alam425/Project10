import React from 'react';

const Simplicy = () => {
    return (
        <div className='mx-28 grid my-20 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-between align-center gap-3'>
            <div>
                <img src="https://i.ibb.co/7C03T39/righty.webp" alt="" />
            </div>
            <div className='my-auto text-slate-600'>
                <p className="text-4xl mb-5">No time to waste: Take your first online order within minutes</p>
                <p className="font-bolt mb-2">How to get started:</p>
                <p>1. Simply create an account<br />
                    2. Add the restaurant widgets to your website<br />
                    3. Use our restaurant online ordering app to confirm orders placed on your website, Facebook page & restaurant app<br />
                    It’s that simple to have your own online food ordering website by tonight.</p>
            </div>
        </div>
    );
};

export default Simplicy;