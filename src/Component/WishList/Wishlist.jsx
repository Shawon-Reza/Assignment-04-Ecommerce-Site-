import { useContext } from "react";
import { AllProducts } from "../Root/Root";
import { TiDelete } from "react-icons/ti";

const Wishlist = () => {
    const {allAddToWishlist} =useContext(AllProducts)
    return (
        <div>
            <p>Wish Listaaaaaaaaaaaaaaa</p>
            {
                allAddToWishlist.map((p, idx) =>
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
    );
};

export default Wishlist;