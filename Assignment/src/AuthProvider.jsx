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
            .then(() => { console.log('logged out'); })
            .catch((error) => { error.message });
    }
    const provider = new GoogleAuthProvider();

    const GitProvider = new GithubAuthProvider();

    const googleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result?.user?.displayName);
                setUser(result.user);
            })
            .catch((r) => { console.log(r.message); })
    }

    const githubSignIn = () => {
        signInWithPopup(auth, GitProvider)
            .then((result) => {
                console.log(result?.user?.displayName || 'Null');
                setUser(result.user);
                alert('Successfully logged in with google')
            })
            .catch((r) => { console.log(r.message); })
    }

    const [allRecipes, setAllRecipes] = useState('');
    useEffect(() => {
        fetch('https://assignment10-henna.vercel.app/allRecipes/')
            .then(res => res.json())
            .then(data => setAllRecipes(data))
        console.log(allRecipes[0]);
    }, [])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log('Auth state changed', user);
        });
        return () => {
            unsubscribe();
            setUser(user);
        }
    }, [])

    const use = {
        logOut, auth, user, googleSignIn, githubSignIn, allRecipes
    }

    return (
        <AuthContext.Provider value={use}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;