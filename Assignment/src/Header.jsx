import React, { useState } from 'react';
import Navbar from './Navbar';

const Header = (props) => {
    // const [loading, setLoading] = useState(true);
    // const [loaded, setLoaded] = useState('');
    const search = (e) => {
        e.preventDefault();
        props.searchBox(e);
        // setLoading(loading);
        // if(loading){
        //     setLoaded('Loading');
        // }
    }

    return (
        <div style={{
            backgroundImage: `url(${'https://i.ibb.co/HKqGX13/headerBG.jpg'})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '500px'
        }}>
            <Navbar />
            <div>
                <form onSubmit={search  } className='flex mx-auto justify-center items-center gap-0'>
                    <div>
                        <input type="text" style={{ width: '75vw' }} name="search" className='mt-16 p-3 mr-0 rounded-lg' placeholder='Search Chef By Country with correct spelling' />
                    </div><br />
                    <div>
                        <button type="submit" className='mt-16 ml-0 btn btn-info text-center mx-auto'>Search</button>
                    </div>
                </form>
            </div>
            {/* <div className="flex justify-center items-center text-2xl"><p>{loaded}</p></div> */}
        </div>
    );
};

export default Header;