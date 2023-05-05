import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Recipe = () => {
    const notify = () => toast("Add to favorite",{
        position: toast.POSITION.TOP_CENTER
    });
    const {id} = useParams;
    const newData = useLoaderData();
    console.log(newData)
    return (
        <div >
           <div className="card shadow-xl bg-slate-300">
            <figure><img className='lg:w-[40%] mt-10' src={newData.selectedData.picture_url} alt="Album"/></figure>
            <div className="card-body lg:px-40">
                <h2 className="card-title text-2xl text-center">Name:{newData.selectedData.name}</h2>
                <h3 className='text-2xl'><span className='text-2xl'>Description:</span> {newData.selectedData.description}</h3>
                <p className='text-2xl'><span className='text-2xl'>Like:</span>  {newData.selectedData.likes}</p>
                <p className='text-2xl'><span className='text-2xl'>Total Recipes items: </span> {newData.selectedData.recipes.length}</p>
                <p className='text-2xl'> <span className='text-2xl'>Year of experience:</span> {newData.selectedData.years_of_experience}</p>
                <p className='text-2xl'><span className='text-2xl'>Ratting:</span> 4.8</p>
                <p className='text-2xl'><span className='text-2xl'>Favorite:</span>true</p>
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
                    <button onClick={notify} className="btn btn-outline btn-error w-52">favorite</button>
                    <ToastContainer />
            </div>
            </div>
        </div>
    );
};

export default Recipe;