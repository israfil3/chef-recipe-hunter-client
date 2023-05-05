import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Recipe = () => {
    const {id} = useParams;
    const newData = useLoaderData();
    console.log(newData)
    return (
        <div >
           <div className="card shadow-xl bg-slate-300">
            <figure><img className='w-[40%] mt-10' src={newData.selectedData.picture_url} alt="Album"/></figure>
            <div className="card-body px-40">
                <h2 className="card-title text-2xl text-center">Name:{newData.selectedData.name}</h2>
                <h3><span className='text-2xl'>Description:</span> {newData.selectedData.description}</h3>
                <p><span className='text-2xl'>Like:</span>  {newData.selectedData.likes}</p>
                <p><span className='text-2xl'>Total Recipes items: </span> {newData.selectedData.recipes.length}</p>
                <p><span className='text-2xl'>Year of experience:</span> {newData.selectedData.years_of_experience}</p>
                {
                     
                    newData.selectedData.recipes.map(dk => <div className="">
                        <h1 className='my-10'>{dk.cooking_method}</h1>
                        {
                            dk.ingredients.map(lk=> <li>{lk}</li> )
                        }
                    </div>
                        )
                }
                <div className="card-actions justify-end">
                </div>
            </div>
            </div>
        </div>
    );
};

export default Recipe;