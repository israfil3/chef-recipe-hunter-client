import React, { useContext, useState } from 'react';
import { AuthContext } from '../authprovider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const { logIn } = useContext(AuthContext) ;
    const navigate = useNavigate() 
    const location = useLocation();

    const [man,setMan] = useState('');
    const [error,setError] = useState('');

    const from = location.state?.from?.pathname || '/';

    const logHandle = (event) => {
              event.preventDefault()
              const email = event.target.email.value;
              const password = event.target.password.value;
              console.log(email,password)
              logIn(email,password)
              .then((result) =>{
                const logUser = result.user;
                event.target.reset();
                navigate(from , {replace: true});
                setMan(logUser);
                setError('')
                
              })
              .catch((error)=>{
                const errorMessage = error.message;
                setError(errorMessage)
                setMan('')
             })
    }
    return (
        <div>
           <div className="hero min-h-screen bg-base-200 pb-20">
                <div>
                    <h1 className='text-2xl text-center my-5'>Please Login</h1>
                    <hr className='w-64 mx-auto my-10'></hr>
                    <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100 ">
                      <div className="card-body">
                      
                        <form onSubmit={logHandle}>
                        <div  className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password"  name='password' className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                </div>
                                <div className="form-control mt-6">
                                <p className='text-red-700 my-4' >{error}</p>
                                 <p className='text-green-700'>{man}</p>
                                <button className="btn btn-primary">Login</button>
                                </div>
                        </form>
                        
                        
                        
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;