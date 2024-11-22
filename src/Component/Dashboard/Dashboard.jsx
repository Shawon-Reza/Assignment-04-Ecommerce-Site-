import { useContext, useState, useEffect } from "react";
import Dashboardbanner from "../Banner/Dashboardbanner";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";
import { AllProducts } from "../Root/Root";
import { TiDelete } from "react-icons/ti";

const Dashboard = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const { allAddtoCart } = useContext(AllProducts);

    // console.log(allAddtoCart);

    useEffect(() => {
        let total = 0;
        for (const p of allAddtoCart) {
            total += p.price;
        }
        setTotalPrice(total);
    }, [allAddtoCart]); // Runs only when allAddtoCart changes

    return (
        <div>
            <NavBar></NavBar>
            <Dashboardbanner></Dashboardbanner>
            {/* DashBoard Header */}
            <div>
                <div className="flex justify-between items-center p-7 bg-slate-200">
                    <p className="font-bold text-lg">Cart</p>
                    <div className="flex gap-5 font-bold">
                        <p>Total Cost: ${totalPrice}</p>
                        <button className="btn btn-sm text-white bg-purple-600">Sort by Price</button>
                        <button className="btn btn-sm text-white bg-purple-600">Purchase</button>
                    </div>
                </div>
            </div>

            {/* Add TO Card Products List */}
            <div className="mt-10 w-[80%] mx-auto rounded-2xl shadow-2xl space-y-4 ">
                {
                    allAddtoCart.map((p, idx) =>
                        <div key={idx} className="flex p-3 md:px-10 shadow-2xl items-center justify-between">
                            <div className="flex gap-5 ">
                                <img src={p.product_image} alt="" className="w-[20%] rounded-lg object-cover h-[120px]" />
                                <div className="shadow-2xl p-1 px-5 rounded-xl">
                                    <h1 className="text-lg font-bold">{p.product_title}</h1>
                                    <p className="opacity-75">{p.description}</p>
                                    <p className="font-bold">${p.price}</p>
                                </div>
                            </div>
                            <span className="text-4xl p-2 text-red-600 cursor-pointer"> <TiDelete /></span>
                        </div>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;
