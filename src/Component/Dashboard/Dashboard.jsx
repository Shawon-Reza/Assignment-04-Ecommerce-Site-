import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Dashboardbanner from "../Banner/Dashboardbanner";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";
import { AllProducts } from "../Root/Root";
import { TiDelete } from "react-icons/ti";
import { Outlet, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const { allAddtoCart, setAllAddtoCart } = useContext(AllProducts);
    const navigate = useNavigate(); // Initialize useNavigate
    const loc = useLocation();

    useEffect(() => {
        let total = 0;
        for (const p of allAddtoCart) {
            total += p.price;
        }
        setTotalPrice(total);
    }, [allAddtoCart]); // Runs only when allAddtoCart changes

    const sortByprice = () => {
        const sorted = [...allAddtoCart].sort((a, b) => b.price - a.price);
        setAllAddtoCart(sorted);
        toast.info("Sort By price");
    };

    const removeTOCart = (p) => {
        const removedProduct = allAddtoCart.filter(product => product.product_id !== p.product_id);
        setAllAddtoCart(removedProduct);
        toast.success("Removed Item Successfully", { position: "top-right" });
    };

    const purchase = () => {
        if (totalPrice) {
            toast.success(
                <div className="flex flex-col justify-center items-center gap-3">
                    <p>Successfully Purchased</p>
                    <p>Total Price: ${totalPrice.toFixed(2)}</p>
                    <button className="btn btn-sm border-cyan-500 border-2" onClick={() => toast.dismiss()}>
                        Close
                    </button>
                </div>,
                {
                    position: "top-center",
                    autoClose: false, // Disable auto-close
                }
            );

            // Clear the cart and navigate to home
            setAllAddtoCart([]);
            setTimeout(() => navigate('/'), 3000); // Redirect after 1 second
        } else {
            toast.warning("First add products");
        }
    };

    return (
        <div>
            <ToastContainer />
            <NavBar />
            <Dashboardbanner />
            <div>
                <div className="flex justify-between items-center p-7 bg-slate-200">
                    {loc.pathname === "/dashboard/wishlist" ? (
                        <p className="text-2xl font-bold">WishList</p>
                    ) : (
                        <>
                            <p className="font-bold text-lg">Cart</p>
                            <div className="flex gap-5 font-bold">
                                <p>Total Cost: ${totalPrice.toFixed(2)}</p>
                                <button
                                    className="btn btn-sm text-white bg-purple-600"
                                    onClick={sortByprice}
                                >
                                    Sort by Price
                                </button>
                                <button
                                    className="btn btn-sm text-white bg-purple-600"
                                    onClick={purchase}
                                >
                                    Purchase
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className="mt-10 w-[80%] mx-auto rounded-2xl shadow-2xl space-y-4">
                {loc.pathname === '/dashboard' ? (
                    allAddtoCart.map((p, idx) => (
                        <div key={idx} className="flex p-3 md:px-10 shadow-2xl items-center justify-between">
                            <div className="flex gap-5">
                                <img src={p.product_image} alt="" className="w-[20%] rounded-lg object-cover h-[120px]" />
                                <div className="shadow-2xl p-1 px-5 rounded-xl">
                                    <h1 className="text-lg font-bold">{p.product_title}</h1>
                                    <p className="opacity-75">{p.description}</p>
                                    <p className="font-bold">${p.price}</p>
                                </div>
                            </div>
                            <span
                                className="text-4xl p-2 text-red-600 cursor-pointer"
                                onClick={() => { removeTOCart(p) }}
                            >
                                <TiDelete />
                            </span>
                        </div>
                    ))
                ) : (<p></p>)}
            </div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Dashboard;
