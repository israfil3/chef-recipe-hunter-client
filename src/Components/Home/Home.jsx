import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './home.css'
import { AuthContext } from '../authprovider/AuthProvider';


const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <>
        <div className='flex justify-between px-28 py-5 bg-slate-300 heading'>
            <h1 className='text-red-300 text-2xl'>China Whisper</h1>
            <div className="link no-underline">
               <Link to={"home"}>Home</Link>
               <Link to={"blog"}>Blog</Link>
            </div>
            {
                user&& <img className='w-10 rounded-lg' src={user.photoURL} alt="" />}
            <button className="btn btn-outline btn-primary"><Link to={"sing"}>Sing up</Link></button>
        </div>
        </>
    );
};

export default Home;