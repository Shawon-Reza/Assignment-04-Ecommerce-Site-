import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import '../public/fackData.json'
import './index.css'
import { Helmet, HelmetProvider } from 'react-helmet-async';

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
import RoutingError from './Component/handleRoutingErrorPage/RoutingError.jsx';
import Contact from './Component/Contact/Contact.jsx';
import LogIn from './Component/Login/LogIn.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <RoutingError></RoutingError>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        errorElement: <RoutingError></RoutingError>,
        children: [
          {
            path: ":categories",
            element: <FetchProducs></FetchProducs>,
            errorElement: <RoutingError></RoutingError>,
          },
        ],
      },
      {
        path: "/dashboard", // Parent path
        element: <Dashboard></Dashboard>,
        errorElement: <RoutingError></RoutingError>,
        children: [
          {
            path: "cart", // Relative path
            element: <Cart></Cart>,
            errorElement: <RoutingError></RoutingError>,
          },
          {
            path: "wishlist", // Relative path
            element: <Wishlist></Wishlist>,
            errorElement: <RoutingError></RoutingError>,
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statictics></Statictics>,
        errorElement: <RoutingError></RoutingError>,
      },
      {
        path: ":Category/:laptop/:id",
        element: <ProductDetails></ProductDetails>,
        errorElement: <RoutingError></RoutingError>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
        errorElement: <RoutingError></RoutingError>,
      },

      {
        path: "/:category/:id",
        element: <ProductDetails></ProductDetails>,
        errorElement: <RoutingError></RoutingError>,
      },
      {
        path: "allproduct/:id",
        element: <ProductDetails></ProductDetails>,
        errorElement: <RoutingError></RoutingError>,
      },
      {
        path: ":cart",
        element: <Dashboard></Dashboard>
      },
      {
        path:'logIn',
        element: <LogIn></LogIn>
      }
      ,
      {
        path:'logout',
        element: <LogIn></LogIn>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
