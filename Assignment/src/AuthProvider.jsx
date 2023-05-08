import React, { createContext, useEffect, useState } from 'react';
import app from './firebase.config';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const logOut = () => {
        signOut(auth)
            .then(() => { console.log('Successfully Logged out'); })
            .catch((error) => { error.message });
    }

    const provider = new GoogleAuthProvider();
    const GitProvider = new GithubAuthProvider();

    const googleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);
            })
            .catch((r) => { console.log(r.message); })
        }
        
        const githubSignIn = () => {
            signInWithPopup(auth, GitProvider)
            .then((result) => {
                setUser(result.user);
            })
            .catch((r) => { console.log(r.message); })
    }

    const [ allRecipes, setAllRecipes ] = useState('');
    useEffect(() => {
        fetch('https://assignment10-alam425.vercel.app/recipes')
            .then(res => res.json())
            .then(data => {
                setAllRecipes(data);
            })
    }, [])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {setUser(loggedUser);});
        return () => {
            unsubscribe();
        }
    }, [])

    const use = {
        logOut, auth, user, googleSignIn, githubSignIn, allRecipes
    };

    return (
        <AuthContext.Provider value={use}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;