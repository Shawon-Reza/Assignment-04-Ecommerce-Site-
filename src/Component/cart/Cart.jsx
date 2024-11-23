import { useContext } from "react";
import { AllProducts } from "../Root/Root";
import { TiDelete } from "react-icons/ti";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = () => {
    const { allAddtoCart, setAllAddtoCart } = useContext(AllProducts)
    const removeTOCart = (p) => {
        const removedProduct = allAddtoCart.filter(product => product.product_id != p.product_id)
        setAllAddtoCart(removedProduct)
        toast.success("Removed Iteem Successfull", {
            position: "top-right"
        })
    }

    

    

    return (
        <div>
            <ToastContainer />
            {
                allAddtoCart.map((p, idx) =>
                    <div key={idx} className="flex p-3 md:px-10 shadow-2xl items-center justify-between">
                        <div className="flex gap-5 ">
                            <img src={p.product_image} alt="" className="w-[20%] rounded-lg object-cover h-[120px] shadow-2xl" />
                            <div className="shadow-2xl w-full p-1 px-5 rounded-xl">
                                <h1 className="text-lg font-bold">{p.product_title}</h1>
                                <p className="opacity-75">{p.description}</p>
                                <p className="font-bold">${p.price}</p>
                            </div>
                        </div>
                        <span
                            className="text-4xl p-2 text-red-600 cursor-pointer"
                            onClick={() => {
                                removeTOCart(p)
                            }}
                        > <TiDelete /></span>
                    </div>)
            }
        </div>
    );
};

export default Cart;