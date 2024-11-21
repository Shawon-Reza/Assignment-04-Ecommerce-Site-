import { NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import './Nav.css'

const NavBar = () => {
    return (
        <div>
            <nav
                className="flex justify-between items-center w-full bg-[#9538E2] py-5 text-white px-12 rounded-t-xl">
                <h1 className="font-bold">Gadget Heaven</h1>
                <div className="flex gap-5 font-semibold">
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={"/statistics"}>Statistic</NavLink>
                    <NavLink to={'/dashboard'}>Dashboard</NavLink>
                </div>
                <div className="flex gap-3">
                    <span className="cursor-pointer p-1
                    bg-white text-black rounded-full "><FiShoppingCart /></span>
                    <span className="cursor-pointer p-1
                    bg-white text-purple-500 rounded-full"><FaHeart /></span>
                </div>
            </nav>
        </div>
    );
};

export default NavBar; <h1>Navbar</h1>