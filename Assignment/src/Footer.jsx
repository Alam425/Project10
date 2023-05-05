import React from 'react';
import './index.css';

const Footer = () => {
    return (
        <div className='py-10 p-10 bg-slate-700 text-slate-400 whitespace-nowrap'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-between align-center gap-10'>
                <div className='col'>
                    <p className="text-2xl text-slate-300">FOOD ORDERING</p><hr />
                    <p className='pl-8 p-1'><a href="#">Overview</a></p>
                    <p className='pl-8 p-1'><a href="#">Website Ordering</a></p>
                    <p className='pl-8 p-1'><a href="#">Facebook Ordering</a></p>
                    <p className='pl-8 p-1'><a href="#">Mobile Apps</a></p>
                    <p className='pl-8 p-1'><a href="#">How It Works</a></p>
                </div>
                <div className='col'>
                    <p className="text-2xl text-slate-300">RESTAURANT SERVICES</p><hr />
                    <p className='pl-8 p-1'><a href="#">Overview
                    </a></p>
                    <p className='pl-8 p-1'><a href="#">Table Reservations</a></p>
                    <p className='pl-8 p-1'><a href="#">Pre-order food</a></p>
                    <p className='pl-8 p-1'><a href="#">Food for Takeaway</a></p>
                    <p className='pl-8 p-1'><a href="#">Food Delivery</a></p>
                </div>
                <div className='col'>
                    <p className="text-2xl text-slate-300">MARKETING & SALES</p><hr />
                    <p className='pl-8 p-1'><a href="#">Videos</a></p>
                    <p className='pl-8 p-1'><a href="#">Promotions Engine</a></p>
                    <p className='pl-8 p-1'><a href="#">Website Generator</a></p>
                    <p className='pl-8 p-1'><a href="#">Free AdWords Generator</a></p>
                    <p className='pl-8 p-1'><a href="#">How To Sell</a></p>
                </div>
                <div className='col'>
                    <p className="text-2xl text-slate-300">PARTNER & SUPPORT</p><hr />
                    <p className='pl-8 p-1'><a href="#">Partner Program</a></p>
                    <p className='pl-8 p-1'><a href="#">Ordering API</a></p>
                    <p className='pl-8 p-1'><a href="#">FAQ</a></p>
                    <p className='pl-8 p-1'><a href="#">Reviews</a></p>
                    <p className='pl-8 p-1'><a href="#">Demos</a></p>
                </div>
            </div>
            <div className='mx-auto my-5'><p>© 2023, Asiano Restoranto</p></div>
        </div>
    );
};

export default Footer;