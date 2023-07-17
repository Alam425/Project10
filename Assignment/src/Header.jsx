import React from 'react';
import Navbar from './Navbar';

const Header = props => {

    const search = (e) => {
        e.preventDefault();
        props.searchBox(e);
    }

    const nameSearch = e => {
        e.preventDefault();
        props.nameSearchBox(e);
    }

    return (
        <div style={{
            backgroundImage: `url(${'https://i.ibb.co/HKqGX13/headerBG.jpg'})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '500px'
        }}>
            <Navbar />
            <div className='flex mx-auto justify-center items-center gap-20'>
                <form onSubmit={search} className=''>
                    <div className='mt-5'>
                        <input type="text" style={{ width: '40vw' }} name="search" className='p-3 mr-0 rounded-lg' placeholder='Search Chef By Country' />
                    </div><br />
                    <div className='mx-auto w-20'>
                        <button type="submit" className='m-0 btn btn-info text-center mx-auto'>Search</button>
                    </div>
                </form>

                <form onSubmit={nameSearch} >
                    <div className='mt-5'>
                        <input type="text" style={{ width: '40vw' }} name="search" className='p-3 mr-0 rounded-lg' placeholder='Search Chef By Name' />
                    </div><br />
                    <div className='mx-auto w-20'>
                        <button type="submit" className='m-0 btn btn-info text-center mx-auto'>Search</button>
                    </div>
                </form>
            </div>
            {
                props.error &&
                <p className="text-red-600 bg-slate-200 p-5 m-5 mx-auto text-center text-5xl font-semibold">0ops, Search Mismatched....!!</p>
            }
        </div>
    );
};

export default Header;