import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import SingUp from './Components/SingUp';
import UserProvider from './Components/UserProvider/UserProvider';
import PrivetRoute from './Components/PrivetRoute.jsx/PrivetRoute';
import Orders from './Components/Orders';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

      },
      {
        path : '/login',
        element: <Login></Login>
      },
      {
        path: '/singUp',
        element: <SingUp></SingUp>,

      },
      {
        path: '/orders',
        element: <PrivetRoute><Orders></Orders></PrivetRoute>,

      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
    <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
)
