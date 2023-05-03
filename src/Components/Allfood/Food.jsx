import React from 'react';
import './food.css'

const Food = ({food}) => {
    const {id,likes,name,number_of_recipes,picture_url,years_of_experience,recipes} = food;
    console.log(food)

    return (
        <div className='food-content w-96 h-full'>
            <div className="card bg-base-100 shadow-xl food-img">
                        <img src={picture_url} alt="Shoes" className="rounded-xl" />
                 <div className="card-body items-center text-center">
                          <h2 className="card-title">Chef Name:{name}</h2>
                            <h4>Years of experience:{years_of_experience}</h4>
                         <h1>Recipes items:{recipes.length}</h1>
                            <h1>Total Like:{likes}</h1>
                        <div className="card-actions">
                        <button className="btn btn-primary">View Recipes</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Food;