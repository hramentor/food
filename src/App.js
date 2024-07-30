import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";

import Body from "./components/Body";

import "../index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import RestaurantMenu from "./components/RestaurantMenu";
import Context from "./utils/Context";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";



const About= lazy(()=>import("./components/About"))
const Cart=lazy(()=>import("./components/Cart"))
const Login=lazy(()=>import("./components/Login"))
const Contact=lazy(()=>import("./components/Contact"))

const App = () => {

const [out,setOut] =useState()

useEffect(()=>{
  const data={
    name:"welcome to react"
  }
  setOut(data.name)
},[])

  return (
    <Provider store={appStore}>
    <div>
      <Context.Provider value={{name:out,setOut}}>
        <Context.Provider value={{name:"Hi phani"}} > <Header /></Context.Provider>
     
      <Outlet />
      </Context.Provider>
     
    </div>
    </Provider>
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
