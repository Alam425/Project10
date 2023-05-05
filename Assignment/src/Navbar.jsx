import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    return (
        <div>
            <div className="navbar bg-base-100 m-0">
                <div className="flex-1 m-0">
                    <a className="btn btn-ghost normal-case text-2xl text-slate-600 font-bold">Asiano Restoranto</a>
                </div>
                <div className="flex-none m-0">
                    <ul className="menu menu-horizontal px-1 text-lg m-0">
                        <li><p>{}</p></li>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        {(!user) ? 
                        <li><Link to='/login'>Login</Link></li> : 
                        <> <span>user.displayName</span>
                        <button onClick={()=>logOut()}>LogOut</button></>}
                        <li><Link to='/register'>Register</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;