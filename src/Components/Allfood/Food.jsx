import React from 'react';

const Food = ({food}) => {
    const {id,like,name,number_of_recipes,picture_url,years_of_experience,recipes} = food;
    console.log(food)

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <img src={picture_url} alt="Album"/>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Food;