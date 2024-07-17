import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"


const Header=()=>{

   
    //used to handle side effects 

   const isOnline= useOnlineStatus()

    return (
        <div className="head">
            <img className="logo" src="https://cdn2.vectorstock.com/i/1000x1000/27/01/food-delivery-logo-design-with-retro-scooter-vector-22912701.jpg" />
            <ul className="nav">
        
        <li>{isOnline?"🟢🟢🟢" :"🔴🔴🔴"}</li>
                <Link to="/"> <li>Home</li></Link>
               <Link to="/about"><li>About</li></Link>
               <Link to="/contact">Contact</Link>
               <Link to="cart"><li>Cart</li></Link>
              
               <a href="/login">   <li>Login</li>
               </a>
                
              
            </ul>

        </div>
    )
}


export default Header

//logo 
// Nav-items   Home About Cart Contat Login 