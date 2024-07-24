


import React,{useContext} from 'react'
import Context from '../utils/Context'


const ItemList = (props) => {
    const {items,y}= props

    const {name}=useContext(Context)
   
  return (
    <div>
        {
            items.map(item=>(
                <div>
                    <div>
                        <div>
                            <span>{item.card.info.name}</span>
                            <h1>{y}</h1>
                            <h1>{name}</h1>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default ItemList