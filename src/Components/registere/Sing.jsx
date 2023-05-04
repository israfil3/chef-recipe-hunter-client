import React, { useState } from 'react';
import './sing.css';
import {FaFacebook,FaGithub} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

const Sing = () => {
    const [user,setUser] = useState('')
    const [error,setError] = useState('')
    const submitSing =(event)=> {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const url = event.target.url.value;
        console.log(name,email,password,url)
        // *************************
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setError('');
                event.target.reset;
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
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
                    <input className='btn' type="submit" value="Sing up" />
                    <p className='mt-5'>all ready you have a Account <Link to={"/login"} className='text-blue-600'>Login now</Link></p>
                    <hr className='w-64 mx-auto my-10'></hr>
                </form>
                <button className='btn'><FaFacebook className='mx-3 text-2xl'/>Login with Facebook</button><br /><br />
                <button className='btn'><FaGithub className='mx-3 text-2xl'/> Login with Github</button>   
        </div>

        </>
    );
};

export default Sing;