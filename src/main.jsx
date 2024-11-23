import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import '../public/fackData.json'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root.jsx';
import Home from './Component/Home/Home.jsx';
import Dashboard from './Component/Dashboard/Dashboard.jsx';
import Statictics from './Component/Statistics/Statictics.jsx';
import FetchProducs from './Component/FetchProducts/FetchProducs.jsx';
import ProductDetails from './Component/ProductDetails/ProductDetails.jsx';
import Cart from './Component/cart/Cart.jsx';
import Wishlist from './Component/WishList/Wishlist.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: ":categories",
            element: <FetchProducs></FetchProducs>,
          },
        ],
      },
      {
        path: "/dashboard", // Parent path
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "cart", // Relative path
            element: <Cart></Cart>,
          },
          {
            path: "wishlist", // Relative path
            element: <Wishlist></Wishlist>,
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statictics></Statictics>,
      },
      {
        path: ":Category/:laptop/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: ":laptop/:id",
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
