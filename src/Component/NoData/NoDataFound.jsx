import { FaHeartBroken } from "react-icons/fa";

const NoDataFound = () => {
    return (
        <div className="text-center border-8 rounded-xl border-pink-100 flex flex-col justify-center  p-10 absolute bg-purple-600 w-[60%] text-white left-[35%] sm:left-[30%] lg:left-[25%] mt-20">
            <div>
                <p className="text-4xl font-bold">Opps!</p>
                <p className="opacity-75 my-3">No Products Available Write Now</p>
                <p className=" text-lg flex gap-3 items-center justify-center">Try next time <span><FaHeartBroken /></span> </p>
            </div>

        </div>
    );
};

export default NoDataFound;