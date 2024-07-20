


import React from 'react'

const ItemList = (props) => {
    const {items}= props
   
  return (
    <div>
        {
            items.map(item=>(
                <div>
                    <div>
                        <div>
                            <span>{item.card.info.name}</span>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default ItemList