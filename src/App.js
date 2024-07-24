import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";

import Body from "./components/Body";

import "../index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import RestaurantMenu from "./components/RestaurantMenu";
import Context from "./utils/Context";



const About= lazy(()=>import("./components/About"))
const Cart=lazy(()=>import("./components/Cart"))
const Login=lazy(()=>import("./components/Login"))
const Contact=lazy(()=>import("./components/Contact"))

const App = () => {
  return (
    <div>
      <Context.Provider value={{name:"ABC"}}>
      <Header />
      <Outlet />
      </Context.Provider>
     
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
                element:<Suspense><About /></Suspense> ,
              },
              {
                path: "/contact",
                element:<Suspense><Contact /></Suspense> ,
              },
              {
                path: "/login",
                element:<Suspense><Login/></Suspense>,
              },
              {
                path: "/cart",
                element:<Suspense><Cart/></Suspense>,
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
