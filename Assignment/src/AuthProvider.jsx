import React, { createContext } from 'react';
import app from './firebase.config';
import { getAuth, signOut } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    
    const auth = getAuth(app);

    const logOut = () => {
        signOut(auth)
        .then(() => { console.log('logged out'); })
        .catch((error) => { error.message });
    }

    const use = {
        logOut
    }

    return (
        <AuthContext.Provider value={use}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;