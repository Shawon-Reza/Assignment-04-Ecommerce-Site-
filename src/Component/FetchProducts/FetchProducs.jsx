import { useEffect, useState } from "react";
import Product from "../Product/Product";
import { useLocation } from "react-router-dom";

const FetchProducs = () => {
    // Load Fack Data
    const [ProductsData, setProductsData] = useState([0])

    useEffect(() => {
        fetch("../../../public/fackData.json")
            .then((res) => res.json())
            .then((data) => setProductsData(data))
            .catch((err) => console.error("Failed to fetch data:", err));
    }, []);

    const rout= useLocation()


    return (
        <div>
            <h1> From : {rout.pathname}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    ProductsData.map(product => <Product
                        product={product}
                        key={product.product_id}
                    ></Product>)
                    
                }
            </div>
        </div>
    );
};

export default FetchProducs;