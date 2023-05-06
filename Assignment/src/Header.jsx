import React from 'react';
import Navbar from './Navbar';

const Header = (props) => {
    const search = (e) => {
        e.preventDefault();
        props.searchBox(e);
        }

    return (
        <div style={{
            backgroundImage: `url(${'../src/assets/headerBG.jpg'})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '500px'
        }}><Navbar />
            <div className='flex justify-center items-center'>
                <form>
                    <input onKeyUp={search} type="text" name="search" className='mt-48 p-3 rounded-lg' placeholder='Search Chef By Country' />
                    <button type="submit" className='btn btn-info'>Search</button>
                </form>
            </div>
        </div>
    );
};

export default Header;