import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AllProducts } from "../Root/Root";


const Product = ({ product }) => {
    const { category, price, description, product_image, product_title, rating, specification, product_id } = product;


    return (
        <div className="space-y-2 p-3 shadow-xl rounded-xl flex flex-col">
            <img className="rounded-lg shadow-2xl" src={product_image} alt="" />
            <h1 className="text-2xl font-semibold">{product_title}</h1>
            <p className="opacity-70 flex-grow">Price: {price}k</p>

            <NavLink
                to={`${category}/${product_id}`}

                state={{ product }}
            >
                <button
                    className="btn rounded-3xl border-cyan-500"
                    
                >ViewDetails</button>
            </NavLink>
        </div>
    );
};

export default Product;