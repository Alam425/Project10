import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthProvider';
import { FaBars, FaMixer } from 'react-icons/fa';
import ActiveLink from './ActiveLink';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className="navbar bg-base-100 m-0">
                <div className="flex-1 m-0">
                    <p className="text-2xl text-slate-600 font-bold">Asiano Restoranto</p>
                </div>


                <div className="flex-none m-0">
                    <ul className="menu menu-horizontal px-1 text-lg m-0">
                        <li className='m-1 rounded-md text-center bg-slate-200'><ActiveLink to='/'>Home</ActiveLink></li>
                        <li className='m-1 rounded-md text-center bg-slate-200'><ActiveLink to='/blog'>Blog</ActiveLink></li>
                        {user ?
                            <>
                                <div className="tooltip tooltip-bottom uppercase" data-tip={user.displayName}>
                                    <img className='w-8 h-8 rounded-lg' src={user.photoURL} alt={user.displayName || user.email} />
                                    <button onClick={logOut}>LogOut</button>
                                </div>
                            </> :
                            <>
                                <li className='m-1 rounded-md text-center bg-slate-200'><ActiveLink to='/login'>Login</ActiveLink></li>
                            </>}
                    </ul>
                </div>

                {/* <div className='relative sm:hidden block'>
                    {isOpen &&
                        <ul className="absolute menu menu-vertical px-1 text-lg m-0 top-0 right-4">
                            <li className='m-1 rounded-md text-center bg-slate-200'><ActiveLink to='/'>Home</ActiveLink></li>
                            <li className='m-1 rounded-md text-center bg-slate-200'><ActiveLink to='/blog'>Blog</ActiveLink></li>
                            {user ?
                                <>
                                    <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                        <button className='m-1 rounded-md text-center uppercase btn btn-success bg-slate-200' onClick={logOut}>LogOut<br />
                                            <img className='w-8 h-8 rounded-lg' src={user.photoURL} alt={user.displayName || user.email} />
                                        </button>
                                    </div>
                                </> : <>
                                    <li className='m-1 rounded-md text-center bg-slate-200'><ActiveLink to='/login'>Login</ActiveLink></li></>}
                        </ul>}
                    <button onClick={() => setIsOpen(!isOpen)} className='sm:hidden'>
                        {isOpen ? <FaMixer /> : <FaBars />} </button>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;