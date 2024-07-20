


import React, { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCate = (props) => {
    const [showItem,setShowItem]= useState(false)
     const {itemCards,title} = props.item.card.card
   // console.log(props)
  return (
    <div className=' w-6/12 bg-gray-50 p-4 my-2 m-auto shadow-xl'>
        <div className='flex justify-between ' onClick={()=>{

            setShowItem(!showItem)

        }}>

        <span className='font-bold text-lg'>{title} ({itemCards.length})</span>
        {showItem ?<span>⬇️</span>:<span>⬆️</span>}
        </div>
       {showItem && <ItemList items={itemCards}/>}
      
        
    </div>
  )
}

export default RestaurantCate