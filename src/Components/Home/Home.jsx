import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'


const Home = () => {
    return (
        <>
        <div className='flex justify-between px-28 py-5 bg-slate-300 heading'>
            <h1 className='text-red-300 text-2xl'>China Whisper</h1>
            <div className="link no-underline">
               <Link to={"home"}>Home</Link>
               <Link to={"blog"}>Blog</Link>
            </div>
            <button className="btn btn-outline btn-primary"><Link to={"sing"}>Sing up</Link></button>
        </div>
        </>
    );
};

export default Home;