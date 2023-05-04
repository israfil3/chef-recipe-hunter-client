import React, { useState } from 'react';
import './sing.css';
import {FaGoogle,FaGithub} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';



const Sing = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const [user,setUser] = useState('');
    const [error,setError] = useState('');
    const [git,setGit] = useState('');
    const [gitError,setGitError] = useState('')

    // github sing method
    const githubSing = () => {
        signInWithPopup(auth,githubProvider)
        .then((result)=>{
            const gitUser = result.user
            setGit(gitUser);
            setGitError('')
        })
        .catch((error)=> {
            const errorMessage = error.message;
            setGitError(errorMessage);
            setGit('')
        })


    }
    // google sing method
    const singGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
          }).catch((error) => {
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
    }
    // email sing method
    const submitSing =(event)=> {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const url = event.target.url.value;
        if(password.length<6){
            setError("please add at least 6 characters in your password")
           return
        }
        console.log(name,email,password,url)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setError('');
                event.target.reset();
                setUser('Sing up successfully')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
                setUser('')
            });
    }
    return (
        <>
        <div className='bg-slate-300 px-32 text-center'>
            <h1 className="text-3xl font-bold text-center my-5">Please sing up</h1>
                <form onSubmit={submitSing} className='form-area'>
                    <input type="text" name="name" id="name" placeholder='Your name' required/><br />
                    <input type="email" name="email" id="email" placeholder='Your email' required/><br />
                    <input type="password" name="password" id="password" placeholder='Your password'required/><br />
                    <input type="url" name="url" id="url" placeholder='Your photo url' required/> <br />
                    <p className='text-red-700 my-4' >{error}</p>
                    <p className='text-green-700'>{user}</p>
                    <input className='btn' type="submit" value="Sing up" />
                    <p className='mt-5'>all ready you have a Account <Link to={"/login"} className='text-blue-600'>Login now</Link></p>
                    <hr className='w-64 mx-auto my-10'></hr>
                </form>
                <p className='text-red-500 my-2'>{gitError}</p>
                <button className='btn' onClick={singGoogle}><FaGoogle className='mx-3 text-2xl'/>Login with Google</button><br /><br />
                <button className='btn' onClick={githubSing}><FaGithub className='mx-3 text-2xl'/> Login with Github</button>   
        </div>

        </>
    );
};

export default Sing;