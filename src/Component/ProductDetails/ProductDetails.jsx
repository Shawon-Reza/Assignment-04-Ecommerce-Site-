import { useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";
import { FcRating } from "react-icons/fc";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";



const ProductDetails = () => {

    // Get Specific produc details sent vai NavLink State.
    const loc = useLocation()
    console.log(loc.state.product
    )

    const { category, price, description, product_image, product_title, rating, specification, product_id, availability } = loc.state.product;


    return (
        <div>
            <NavBar></NavBar>
            <div className="mt-40 flex gap-[4%] justify-center shadow-2xl p-5 rounded-lg">

                <img src={product_image} alt="" className="rounded-xl shadow-2xl w-[50%] object-contain max-h-[400px]" />
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold">{product_title}</h1>
                    <p className="font-bold text-3xl">Price : ${price}</p>
                    <p className="btn btn-sm border-cyan-500">{`${availability ? "In Stock" : "Out of Stock"}`} </p>
                    <p className="font-bold text-xl ">Specifications:</p>
                    <ul className="opacity-70">
                        {
                            specification.map((p, idx) => (<li key={idx}>{idx + 1}. {p}</li>))
                        }
                    </ul>
                    <span className="flex items-center gap-2 font-bold">Rating {rating} <FcRating /></span>

                    <div className="flex gap-5">
                        <button>Add TO Card</button>

                        <p className="cursor-pointer text-red-600 text-2xl">
                            <FaHeart />
                        </p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductDetails;
