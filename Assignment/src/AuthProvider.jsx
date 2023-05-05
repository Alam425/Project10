import React, { createContext } from 'react';
import app from './firebase.config';
import { getAuth } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    
    const auth = getAuth(app);

    // const

    const googleSignIn = {
    }

    const user = {
        googleSignIn
    }

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;