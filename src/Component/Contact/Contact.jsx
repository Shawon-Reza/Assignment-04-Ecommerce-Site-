import { Helmet } from "react-helmet-async";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";

const Contact = () => {
    return (
        <div>
             <Helmet>
                <title>Gadget Haven | Contacts</title>
            </Helmet>
            <NavBar></NavBar>
            <div className="text-center border-8 rounded-xl border-pink-100 flex flex-col justify-center  p-10  bg-purple-600 w-[80%] text-white mx-auto mt-14">
                <div>
                    <p className="text-4xl font-bold">WelCome!</p>
                    <p className="font-bold">Phone : <span className="text-yellow-400">01822531281</span> </p>
                    <p className="font-bold">Email : <span className="text-yellow-400">shawon.reza.sr81@gmail.com</span> </p>
                    <p className="opacity-75 my-3">Thanks to visit us!</p>
                </div>

            </div>
            <div className="-mt-16">
            <Footer></Footer>
            </div>

        </div>
    );
};

export default Contact;