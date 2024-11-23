import { NavLink } from "react-router-dom";


const Dashboardbanner = () => {
    return (
      <div className="text-center text-white bg-purple-600 p-10 space-y-3 shadow-2xl shadow-red-300">
        <h3 className="text-3xl font-bold">Dashboard</h3>
        <p className="opacity-75">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex gap-10 justify-center">

          <NavLink to="cart">
            <button className="btn bg-purple-600 border-white border-2 text-white">Cart</button>
          </NavLink>

          <NavLink to="wishlist">
            <button className="btn bg-purple-600 border-2 text-white">WishList</button>
          </NavLink>
        </div>
      </div>
    );
  };
  
export default Dashboardbanner;