import { FaHeartBroken } from "react-icons/fa";

const RoutingError = () => {
    return (
        <div className="text-center border-8 rounded-xl border-pink-100 flex flex-col justify-center  p-10 absolute bg-purple-600 w-[60%] text-white left-[22%]    mt-20">
            <div>
                <p className="text-4xl font-bold">Opps!</p>
                <p className="opacity-75 my-3">You are in the wrong path.</p>
                <p className=" text-lg flex gap-3 items-center justify-center">Try next time <span><FaHeartBroken /></span> </p>
            </div>

        </div>
    );
};

export default RoutingError;