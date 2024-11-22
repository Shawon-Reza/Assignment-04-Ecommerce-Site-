import { useContext, useEffect, useState } from "react";
import Product from "../Product/Product";
import { useLocation } from "react-router-dom";
import { AllProducts } from "../Root/Root";
import { categoriesValidation } from "../FetchData/FetchData";
import NoDataFound from "../NoData/NoDataFound";

const FetchProducs = () => {
    // Load Fack Data
    // const [ProductsData, setProductsData] = useState([0])

    // useEffect(() => {
    //     fetch("../../../public/fackData.json")
    //         .then((res) => res.json())
    //         .then((data) => setProductsData(data))
    //         .catch((err) => console.error("Failed to fetch data:", err));
    // }, []);

    // Categories Routing Location
    const rout = useLocation()
    const path = rout.pathname.slice(1);



    const { Allproducs, setAllProducts } = useContext(AllProducts)

    // Get Category wise Data using Funtion
    const categoryData = categoriesValidation(path, Allproducs)

    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    categoryData.length > 0 ? (categoryData.map(product => <Product
                        product={product}
                        key={product.product_id}
                    ></Product>)) : (<NoDataFound></NoDataFound>)


                }
            </div>
        </div>
    );
};

export default FetchProducs;