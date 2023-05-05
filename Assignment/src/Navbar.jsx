import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 m-0">
                <div className="flex-1 m-0">
                    <a className="btn btn-ghost normal-case text-2xl text-slate-600 font-bold">Asiano Restoranto</a>
                </div>
                <div className="flex-none m-0">
                    <ul className="menu menu-horizontal px-1 text-lg m-0">
                        <li><a>Item 1</a></li>
                        <li tabIndex={0}>
                            <a>
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2 bg-base-100">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;