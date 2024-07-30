




import React, { useContext } from 'react'
import Context from '../utils/Context'

const RestaurantCard = (props) => {
   const { cloudinaryImageId, avgRating, cuisines,sla, costForTwo} = props.out.info
   const res="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
    console.log(props)

    const {name} = useContext(Context)
  return (
    <div className=' w-[250px] rounded-xl bg-gray-200 m-4 p-4  hover:bg-orange-200'>
        <img className=' rounded-xl ' src={res+cloudinaryImageId} />
        {/* <h3>{name}</h3> */}
        <p>{avgRating} 🌟 Rating </p>
        <p>{sla.deliveryTime} mnts</p>
        <p>{cuisines[0]} </p>
        <p>{costForTwo}</p> 
        <p>{name}</p>
    </div>
  )
}



export default RestaurantCard