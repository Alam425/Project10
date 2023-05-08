import React from 'react';
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            style={({ isActive }) => {
                return {
                    fontWeight: isActive ? "text-2xl" : "text-md"
                };
            }}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;