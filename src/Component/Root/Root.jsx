import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export const AllProducts = createContext();

const Root = () => {
    // Global Data for Contex API
    const [allAddtoCart, setAllAddtoCart] = useState([])
    const [allAddToWishlist,setallAddToWishlist]=useState([])
    const [Allproducs, setAllProducts] = useState([''])


    useEffect(() => {
        fetch("/fackData.json")
            .then((res) => res.json())
            .then((data) => setAllProducts(data))
            .catch((err) => console.error("Failed to fetch data:", err));
    }, []);

    // console.log("From Root", Allproducs);


    return (

        <div>

            <AllProducts.Provider
                value={{ Allproducs, setAllProducts, allAddtoCart, setAllAddtoCart,allAddToWishlist,setallAddToWishlist }}>

                <Outlet></Outlet>
            </AllProducts.Provider>


        </div>
    );
};

export default Root;