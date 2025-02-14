import { Helmet } from "react-helmet-async";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { auth } from "../../firebase.init";
import { useContext, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGithub } from "react-icons/fa6";
import { AllProducts } from "../Root/Root";
import { NavLink } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";


const LogIn = () => {

    const { user, setuser } = useContext(AllProducts)

    // Sigin User info
    console.log(user);
    const Googleprovider = new GoogleAuthProvider();
    const Githubprovider = new GithubAuthProvider();

    // Google Sign In
    const handleLogIn = () => {
        signInWithPopup(auth, Googleprovider)
            .then(result => {
                console.log(result.user)
                setuser(result.user)
            })
            .catch(err => {
                console.log("Erroe :", err)
                setuser(null)
            })
    }

    //  login Succes Confirmation popup
    useEffect(() => {
        if (user) {
            toast.success(<div>
                <h3 style={{ color: "green" }}></h3>
                <div className="flex gap-2 items-center">
                    <span><img className="w-7 rounded-full" src={user.photoURL} alt="" /></span>
                    <p>Welcome, <strong>{user.displayName}</strong></p>

                </div>


            </div>
                , {
                    position: 'top-center'
                }
            )
            console.log("From Toast");
        }
    }, [user])


    // Github Loging
    const handleGithub = () => {
        signInWithPopup(auth, Githubprovider)
            .then(result => {
                console.log(result);
                setuser(result.user)
            })
            .catch(err => { console.log("Error :", err) })


    }


    // LogOut 
    const handleLogOut = () => {
        signOut(auth)
        .then(()=>console.log("Successfully signed out"))
        .catch(err=>{console.log("Error :",err)})
        setuser('')
    }


    return (
        <div>
            <ToastContainer />
            <Helmet>
                <title>Gadget Haven | Login</title>
            </Helmet>
            <NavBar></NavBar>

            <div className="text-center border-8 rounded-xl border-pink-100 flex flex-col justify-center  p-10  bg-purple-600 w-[80%] text-white mx-auto mt-14 items-center">
                <div>
                    <p className="text-4xl font-bold">WelCome!</p>
                    <p className="text-3xl font-bold text-yellow-400">Sign in to Gadget Heaven</p>

                    {
                        user ?
                            <button
                                className="mt-3 w-full text-center p-1 bg-purple-400 rounded-full font-bold text-yellow-100 shadow-2xl flex items-center drop-shadow-2xl justify-center hover:bg-red-600"
                                onClick={handleLogOut}
                            ><MdOutlineLogout /> LogOut

                            </button>
                            :
                            <div className="flex flex-col">
                                <button className=" mt-3 p-3 bg-purple-400 rounded-full font-bold text-yellow-200 shadow-2xl hover:bg-orange-400 hover:text-white"
                                    onClick={handleLogIn}
                                >
                                    <div className="flex items-center justify-center gap-5">
                                        <span>Sign in with Google</span>
                                        <span className="p-1 bg-white text-red-600 rounded-full"><FaGoogle />
                                        </span>
                                    </div>
                                </button>

                                <button className=" mt-3 p-3 bg-purple-400 rounded-full font-bold text-yellow-200 shadow-2xl  hover:bg-orange-400 hover:text-white"
                                    onClick={handleGithub}
                                >
                                    <div className="flex items-center justify-center gap-5">
                                        <span>Sign in with Github</span>
                                        <span className="p-1 bg-white text-red-600 rounded-full"><FaGithub />
                                        </span>
                                    </div>
                                </button>
                            </div>
                    }



                    <NavLink to="/Signup" className="text-cyan-400 text-d mt-1 block underline hover:text-lime-400" >Create Account</NavLink>

                    <p className="opacity-75 my-3">Thanks to visit us!</p>
                </div>

            </div>


            <Footer></Footer>
        </div>
    );
};

export default LogIn;