import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";
import { FaGoogle } from "react-icons/fa";

const LogIn = () => {
    return (
        <div>
            <NavBar></NavBar>

            <div className="text-center border-8 rounded-xl border-pink-100 flex flex-col justify-center  p-10  bg-purple-600 w-[80%] text-white mx-auto mt-14">
                <div>
                    <p className="text-4xl font-bold">WelCome!</p>
                    <p className="text-3xl font-bold text-yellow-400">Sign in to Gadget Heaven</p>

                    <button className=" mt-3 p-3 bg-purple-400 rounded-full font-bold text-yellow-200 shadow-2xl">
                        <div className="flex items-center justify-center gap-5">
                        <span>Sign in with google</span>
                        <span className="p-1 bg-white text-red-600 rounded-full"><FaGoogle cl />
                        </span>
                        </div>
                    </button>
                    <p className="opacity-75 my-3">Thanks to visit us!</p>
                </div>

            </div>


            <Footer></Footer>
        </div>
    );
};

export default LogIn;