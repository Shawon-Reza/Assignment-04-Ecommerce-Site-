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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        children: [
          {
            path: '/:categories',
            element: <FetchProducs></FetchProducs>,
            children: [

            ]
          }
        ]

      },


      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/statistics',
        element: <Statictics></Statictics>
      },

      {
        path: ':Category/:laptop/:id',
        element: <ProductDetails></ProductDetails>
      },

      {
        path: ':laptop/:id',
        element: <ProductDetails></ProductDetails>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
