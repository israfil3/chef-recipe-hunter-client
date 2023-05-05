import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) =>{

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email,password) => {
      return  createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    };

    const googleSing = () => {
        return signInWithPopup(auth, GoogleProvider)
    };
    const githubSing = () =>{
        return signInWithPopup(auth, GithubProvider)
    }

    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth,currentUser => {
            setUser(currentUser);
            setLoading(false)
        });

        return() => {
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        googleSing,
        githubSing
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;