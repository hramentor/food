

import React from 'react'

const Person = (props) => {
    console.log(props)
  return (
    <div className='person'>
        <h1>{props.out.name}</h1>
        <h4>{props.out.profession}</h4>
    </div>
  )
}

export default Person