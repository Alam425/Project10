import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { FaBars, FaMixer } from 'react-icons/fa';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className="navbar bg-base-100 m-0">
                <div className="flex-1 m-0">
                    <p className="text-2xl text-slate-600 font-bold">Asiano Restoranto</p>
                </div>
                <div className='relative'>
                    {(isOpen) &&
                        <ul className="absolute menu menu-vertical px-1 text-lg m-0 top-0 right-4">
                            <li className='m-1 rounded-md text-center bg-slate-200'><Link to='/'>Home</Link></li>
                            <li className='m-1 rounded-md text-center bg-slate-200'><Link to='/blog'>Blog</Link></li>
                            {user ?
                                <button className='m-1 rounded-md text-center btn btn-success bg-slate-200' onClick={() => logOut()}>LogOut<br /><span className='m-1 rounded-md text-center font-bold text-slate-600 bg-slate-200'>{user.displayName}</span></button> :
                                <li className='m-1 rounded-md text-center bg-slate-200'><Link to='/login'>Login</Link></li>}
                            <li className='m-1 rounded-md text-center bg-slate-200'><Link to='/register'>Register</Link></li>
                        </ul>}
                    <button onClick={() => setIsOpen(!isOpen)} className='sm:hidden'>{isOpen ? <FaMixer /> : <FaBars />} </button>
                </div>

                <div className="flex-none m-0 hidden sm:block">
                    <ul className="menu menu-horizontal px-1 text-lg m-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        {(user) ?
                            <> <span className='font-bold text-slate-600'>{user.displayName}</span>
                                <button onClick={() => logOut()}>LogOut</button></> :
                            <li><Link to='/login'>Login</Link></li>}
                        <li><Link to='/register'>Register</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;