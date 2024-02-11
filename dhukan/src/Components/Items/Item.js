import React from 'react'
import './Item.css'

const Item = (props) => {
  return (
    <div className='item'>
      <img src='{props.img}'></img>
      <h5>{props.title}</h5>
      <div className='price'>
      <p className='New_Price'>{props.newprice}</p>
      <p className='Old_Price'>{props.oldprice}</p>
      </div>
     

    </div>
  )
}

export default Item