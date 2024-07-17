
import React, { useEffect, useState } from 'react'
import { menu_url } from "./constants"

const useRestaurantMenu=(id)=>{


    const [resMenu,setResMenu] = useState(null)
  
    useEffect(()=>{
        const fetchMenu=async()=>{
          const data= await fetch(menu_url+id)
          const res= await data.json()
          setResMenu(res)
    
        }
    
        fetchMenu()
    
      },[])
    

      return resMenu



}

export default useRestaurantMenu