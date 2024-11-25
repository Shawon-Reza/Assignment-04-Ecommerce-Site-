import { Link, NavLink, useLocation } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import './Nav.css'


const NavBar = () => {
    // Navbar Path find
    const path = useLocation()
    //  flex justify-between items-center w-full bg-[#9538E2] py-5 text-white px-12 rounded-t-xl

    return (
        <div>
            <nav
                className={`${path.pathname == '/' ? "flex justify-between items-center w-full bg-[#9538E2] py-5 text-white px-12 rounded-t-xl"
                    :
                    "flex justify-between items-center w-full bg-white py-5 text-black px-12 rounded-t-xl shadow-2xl "}`}>


                <Link to={'/'} ><h1 className="font-bold hidden md:inline">Gadget Heaven</h1></Link>

                <div className="flex gap-5 font-semibold">
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={"/statistics"} className="hidden md:inline">Statistic</NavLink>
                    <NavLink to={'/dashboard'}>Dashboard</NavLink>
                    <NavLink to={'/contact'}>Contact</NavLink>
                    <NavLink to={'/logIn'} >
                        LogIn
                    </NavLink>
                </div>
                <div className="flex gap-3">
                    <NavLink>

                    </NavLink>
                    <span className="cursor-pointer p-1
                    bg-white text-black rounded-full ">
                        <NavLink to={'/dashboard/cart'}>
                            <FiShoppingCart />
                        </NavLink> </span>

                    <span className="cursor-pointer p-1
                    bg-white text-purple-500 rounded-full">
                         <NavLink to={'/dashboard/wishlist'}>
                         <FaHeart />
                        </NavLink>
                        </span>
                </div>
            </nav>
        </div>
    );
};

export default NavBar; <h1>Navbar</h1>