import React, { useContext } from 'react';
import { AuthContext } from '../authprovider/AuthProvider';


const Login = () => {
    const { logIn } = useContext(AuthContext)  
    const logHandle = (event) => {
              event.preventDefault()
              const email = event.target.email.value;
              const password = event.target.password.value;
              console.log(email,password)
              logIn(email,password)
              .then((result) =>{
                const logUser = result.user;
                event.target.reset();
                console.log(logUser);
              })
              .then((error)=>{
                console.log(error)
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