import React, { useEffect, useState } from 'react';
import './header.css'
import Food from '../Allfood/Food';
import Footer from '../Footer/Footer';

const Header = () => {
    const [foods,setFood] = useState([]);
    useEffect(()=>{
        fetch(`https://myapp-israfil3.vercel.app/data`)
        .then(res=> res.json())
        .then(data=>setFood(data))
    },[])
    return (
        <>
        <div className=''>
            <div className="carousel bar my-20">
                <div id="slide2" className="carousel-item relative  w-full">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR39RWzw7zIq6RcSkCmDfRZdrE4j4xK8NptTw&usqp=CAU" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative  w-full">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk1sC3D2qwQ2BtnNLDHeyg9byPnMBHa95WTg&usqp=CAU" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative  w-full">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaWmZFbl30w4StuGK3ID6XQdjT86iFefqC2w&usqp=CAU" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div> 

            <h1 className='text-3xl text-center my-14 chef'>China Best Chef And Food Recipe</h1>
            <div className='card-area sm:grid px-10 gap-14 mb-10 '>
               {
                  foods.map(food =><Food key={food.id} food={food}></Food>

              )}  
           </div>
           
        </div>   
        </>
    );
};

export default Header;