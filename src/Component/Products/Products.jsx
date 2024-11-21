import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
    // Load Fack Data
    const [ProductsData, setProductsData] = useState([0])

    useEffect(() => {
        fetch("../../../public/fackData.json")
            .then((res) => res.json())
            .then((data) => setProductsData(data))
            .catch((err) => console.error("Failed to fetch data:", err));
    }, []);

    return (
        <div className="">
            <h1 className="text-4xl font-bold text-center">Explore Cutting-Edge Gadgets</h1>

            <div className="flex mt-10 gap-4">

                <div className="flex flex-col bg-white p-2 border rounded-lg gap-1 items-center">
                    <NavLink to="/"><button className="btn border-cyan-500">All Product</button></NavLink>
                    <NavLink to=""><button className="btn border-cyan-500">Laptops</button></NavLink>
                    <NavLink to=""><button className="btn border-cyan-500">Phones</button></NavLink>
                    <NavLink to=""><button className="btn border-cyan-500">AAccessories</button></NavLink>
                    <NavLink to=""><button className="btn border-cyan-500">Smart Watch</button></NavLink>
                    <NavLink to=""><button className="btn border-cyan-500">Macbook</button></NavLink>
                    <NavLink to=""><button className="btn border-cyan-500">Iphone</button></NavLink>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        ProductsData.map(product=><Product
                        product={product}
                        key={product.product_id}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;