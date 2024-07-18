


import React, { useEffect, useState } from 'react'
import useOnlineStatus from '../utils/useOnlineStatus'
import RestaurantCard from './RestaurantCard'
import { Link } from 'react-router-dom'

const Body = () => {

  //to ocnvert normal variable in to state variable we should have to use useState

  const [resList,setResList]= useState([])

  
  const isOnline= useOnlineStatus()


  useEffect(()=>{

    const fetchData=async()=>{
      const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const res= await data.json()
        setResList(res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        console.log(res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
      
    }
   
fetchData()
  },[])

  if (isOnline===false) {
    return <h1>seems like your are offline please check your internet connection</h1>
  }

  
  return (
    <div className=' flex flex-wrap'>
       
      
      {
        resList.map(each=> <Link to={"/restaurant/"+each.info.id}><RestaurantCard  out={each}/></Link> )
      }
    
      

    </div>
  )
}

export default Body


// function sum(a,b){

// return a+b

// }

// sum(4,5)  <Sum/>
// sum(11,12) <Sum/>


//Props --> Props are nothing but properties , it is a object  , these are read only , we cant modify it (children)