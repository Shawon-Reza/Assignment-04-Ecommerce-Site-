import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase.init';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
    const [passwordvalid, setpasswordvalid] = useState(true)

    const handleSignUpForm = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&.]{7,}$/;


        // Password Validation Using Regex
        if (!passwordRegex.test(password)) {
            console.log("Not valid");

            setpasswordvalid(false);
            console.log(passwordvalid);
            return;
        }
        setpasswordvalid(true)

        // Firebase
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(res.user)
                toast.success("Create Account Successfully",
                    {
                        position: "top-center"
                    }
                )
            })
            .catch(err => { console.log("Error :", err) })
        setTimeout(() => {
            e.target.email.value = ""
            e.target.password.value = ''
        }, 2000);

    }




    return (
        <div>
            <ToastContainer />
            <NavBar></NavBar>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleSignUpForm}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <input
                                    name='password'
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered" />

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>

                                <p className='text-red-500 text-sm mt-2 w-[80%] mx-auto text-center'>{passwordvalid ? "" : "Use One UpperCase One LowerCase One Special Charecter one length >6"}</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SignUp;