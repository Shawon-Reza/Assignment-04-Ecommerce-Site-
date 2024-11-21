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
import Products from './Component/Products/Products.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        children: [{
          path: '/',
          element: <Products></Products>
        },
        {
          path: '/laptops',
          element: <Products></Products>
        },
        {
          path: '/phones',
          element: <Products></Products>
        },
        {
          path: '/accessories',
          element: <Products></Products>
        },
        {
          path: '/smartwatches',
          element: <Products></Products>
        },
        {
          path:'/macbooks',
          element: <Products></Products>
        },
        {
          path:'/iphones',
          element: <Products></Products>
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
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
