import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";

import Body from "./components/Body";

import "../index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
     
    </div>
  );
};
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path: "/",
                element: <Body />,
              },
              {
                path: "/about",
                element: <About />,
              },
              {
                path: "/contact",
                element: <Contact />,
              },
              {
                path: "/login",
                element: <Login />,
              },
              {
                path: "/cart",
                element: <Cart />,
              },
              {
                path:"/restaurant/:id",
                element:<RestaurantMenu/>
              }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

//Hook is nothing but a normal js utility function  (16.8) 2019

//useState , useEffect

//why hooks was get introduced

//components --> class
