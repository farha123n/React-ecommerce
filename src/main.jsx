import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Root from './Component/Root.jsx';
import Home from './Component/Home.jsx';
import Login from './Component/Login.jsx';
import Register from './Component/Register.jsx';
import AuthProvider from './Component/Provider/AuthProvider.jsx';
import UserProfile from './Component/UserProfile.jsx';
import PrivateRoute from './Component/PrivateRoute.jsx';
import Buy from './Buy.jsx';
import Update from './Component/Update.jsx';
import Error from './Component/Error.jsx';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/product/:sku",
        element:<PrivateRoute><Buy></Buy></PrivateRoute>
      },
      {
        path:"/login",
        element:<Login></Login>,
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/user_profile",
        element:<PrivateRoute><UserProfile></UserProfile></PrivateRoute>
      },
      {
        path:"/update",
        element:<PrivateRoute><Update></Update></PrivateRoute>
      },
      {
        path:"/error",
        element:<Error></Error>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <AuthProvider>
      <HelmetProvider>
      <RouterProvider router={router} />
      </HelmetProvider>
      
      </AuthProvider>
   
  </React.StrictMode>,
)
