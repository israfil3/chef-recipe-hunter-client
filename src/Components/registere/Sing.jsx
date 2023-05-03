import React from 'react';
import './sing.css';
import {FaFacebook,FaGithub} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sing = () => {
    return (
        <>
        <div className='bg-slate-300 px-32 text-center'>
            <h1 className="text-3xl font-bold text-center my-5">Please sing up</h1>
                <form className='form-area'>
                    <input type="text" name="name" id="name" placeholder='Your name' required/><br />
                    <input type="email" name="email" id="email" placeholder='Your email'/><br />
                    <input type="password" name="password" id="password" placeholder='Your password'/><br />
                    <input type="url" name="photo" id="photo" placeholder='Your photo url'/> <br />
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