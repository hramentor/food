


import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../utils/cartSlice'
import ItemList from './ItemList'

const Cart = () => {
  

  const dispatch= useDispatch() 
  const clear=()=>{
    dispatch(clearCart())
  }
  
  const cartItems=useSelector(store=>store.cart.items) 
  //[{},{},{}]
  return (
    <div className=' text-center m-5 p-5'>
      <h1 className=' text-2xl font-bold'>Cart</h1>
      <div className=' w-6/12 m-auto'>
      <button className=' p-2 m-2 bg-black text-white rounded-lg' onClick={clear}>Clear Cart</button>
        <ItemList items={cartItems}/>
      </div>

      {
        cartItems.length==0 && <h1>Cart is Empty Please add items to Cart</h1>
      }
    </div>
  )
}

export default Cart