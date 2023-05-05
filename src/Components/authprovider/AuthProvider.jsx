import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) =>{
    const [user,setUser] = useState(null)

    const createUser = (email,password) => {
      return  createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth,currentUser => {
            console.log('auth state change', currentUser)
            setUser(currentUser);
        });

        return() => {
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        logIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;