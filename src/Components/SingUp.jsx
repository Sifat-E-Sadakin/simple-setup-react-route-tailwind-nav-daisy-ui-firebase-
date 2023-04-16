import React, { useContext } from 'react';
import { userContext } from './UserProvider/UserProvider';

const SingUp = () => {

    let {createNewUser}= useContext(userContext)

    let submit=(event)=>{

        event.preventDefault();

        let email= event.target.email.value;
        let password = event.target.password.value;
        let name = event.target.name.value;

        console.log(email, password);
        createNewUser(email,password)
        .then(res =>{
            let user = res.user;
            user.displayName= name
            console.log(user);
            event.target.reset();
        }

        )

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold p-5">Sing Up Here!</h1>
                       
                    <form onSubmit={submit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
            
        </div>
    );
};

export default SingUp;