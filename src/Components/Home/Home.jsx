import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './home.css'
import { AuthContext } from '../authprovider/AuthProvider';


const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <>
        <div className='lg:flex  lg:items-center lg:justify-between lg:px-28 sm:px-7 py-5 bg-slate-300 heading'>
            <h1 className='text-red-300 text-2xl'>China Whisper</h1>
            <div className="link no-underline lk">
               <Link to={"home"}>Home</Link>
               <Link to={"blog"}>Blog</Link>
            </div>
            {
                user&& <img className='w-10 rounded-lg sm:my-5' src={user.photoURL} alt="" />}
            <button className="btn btn-outline btn-primary sm:my-6"><Link to={"sing"}>Sing up</Link></button>
        </div>
        </>
    );
};

export default Home;