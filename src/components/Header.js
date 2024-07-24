import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import Context from "../utils/Context"


const Header=()=>{

   
    //used to handle side effects 

   const isOnline= useOnlineStatus() 

   const {name}=useContext(Context)

    return (
        <div className=" flex justify-between bg-orange-200 shadow-xl">
            <img className=" w-24" src="https://cdn2.vectorstock.com/i/1000x1000/27/01/food-delivery-logo-design-with-retro-scooter-vector-22912701.jpg" />
            <ul className=" flex items-center p-4 m-4">
        
        <li>{isOnline?"🟢🟢🟢" :"🔴🔴🔴"}</li>
                <Link className=" px-2" to="/"> <li>Home</li></Link>
               <Link className=" px-2" to="/about"><li>About</li></Link>
               <Link className=" px-2" to="/contact">Contact</Link>
               <Link className=" px-2" to="cart"><li>Cart</li></Link>
              <li>{name}</li>
               <a className=" px-2" href="/login">   <li>Login</li>
               </a>
                
              
            </ul>

        </div>
    )
}


export default Header

//logo 
// Nav-items   Home About Cart Contat Login 