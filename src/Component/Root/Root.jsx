import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export const AllProducts = createContext();

const Root = () => {

    // Fetch All Products 
    const [Allproducs, setAllProducts] = useState([''])
    useEffect(() => {
        fetch("../../../public/fackData.json")
            .then((res) => res.json())
            .then((data) => setAllProducts(data))
            .catch((err) => console.error("Failed to fetch data:", err));
    }, []);

    // console.log("From Root", Allproducs);


    return (

        <div>
            <h1>From Root</h1>

            <AllProducts.Provider value={[Allproducs]}>
                <Outlet></Outlet>
            </AllProducts.Provider>


        </div>
    );
};

export default Root;