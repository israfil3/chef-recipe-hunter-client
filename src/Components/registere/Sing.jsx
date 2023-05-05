import React, { useContext, useState } from 'react';
import './sing.css';
import {FaGoogle,FaGithub} from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { AuthContext } from '../authprovider/AuthProvider';



const Sing = () => {
    const navigate = useNavigate() 
    const {user,createUser,googleSing,githubSing} = useContext(AuthContext)
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

        const [man,setMan] = useState('');
         const [error,setError] = useState('');


    // email data
    const submitSing =(event)=> {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const url = event.target.url.value;
        if(password.length < 6){
            return setError("please add at least 6 characters in your password")
            
        }
        createUser(email,password)
        .then((result)=>{
            const logUser = result.user;
            event.target.reset();
            setMan('Sing up successfully')
            navigate(from , {replace: true})
            setError('')
         })
         .catch((error)=>{
            const errorMessage = error.message;
            setError(errorMessage)
            setMan('')
         })
    }
    // google data 
    const googleData = () => {
        googleSing()
        .then((result)=>{
            const parson = result.user;
            navigate(from , {replace: true})

        }).catch((error)=> {
            const errorMassage = error.massage
        })
    }
    // github sing
    const githubData = () => {
        githubSing()
        .then((result)=>{
            const parson = result.user;
            navigate(from , {replace: true})

        }).catch((error)=> {
            const errorMassage = error.massage
        })
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
                    <p className='text-green-700'>{man}</p>
                    <input className='btn' type="submit" value="Sing up" />
                    <p className='mt-5'>all ready you have a Account <Link to={"/login"} className='text-blue-600'>Login now</Link></p>
                    <hr className='w-64 mx-auto my-10'></hr>
                </form>
                <p className='text-red-500 my-2'></p>
                <button onClick={googleData} className='btn' ><FaGoogle className='mx-3 text-2xl'/>Login with Google</button><br /><br />
                <button onClick={githubData} className='btn' ><FaGithub className='mx-3 text-2xl'/> Login with Github</button>   
        </div>

        </>
    );
};

export default Sing;