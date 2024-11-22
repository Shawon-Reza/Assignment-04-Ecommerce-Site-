import { useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";
import { FcRating } from "react-icons/fc";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";



const ProductDetails = () => {

    // Get Specific produc details sent vai NavLink State.
    const loc = useLocation()
    

    const { category, price, description, product_image, product_title, rating, specification, product_id, availability } = loc.state.product;


    return (
        <div>
            <NavBar></NavBar>
            {/* Produc Details Banner */}
            <div className="text-center pb-52 bg-purple-500 text-white space-y-4 relative mb-80">
                <h4 className="font-bold text-4xl pt-5">Producs Details</h4>
                <p className="opacity-80">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

            </div>
            {/* Produc Details */}
            <div className="mt-40 flex gap-[4%] justify-center shadow-2xl p-5 rounded-lg absolute w-[60%] -bottom-40 md:-bottom-52 left-[19%] border-8  bg-white border-purple-300">

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
                        <button className="btn btn-sm border-cyan-500 bg-purple-700 text-white">Add TO Card</button>

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
