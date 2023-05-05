import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div style={{ 
            backgroundImage: `url(${'../src/assets/headerBG.jpg'})`,
            backgroundRepeat: 'no-repeat' ,
            backgroundSize: 'cover',
            height: '500px'
          }}><Navbar/>
        </div>
    );
};

export default Header;