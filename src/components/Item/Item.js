import React from 'react'

const item = ({item}) => {
  return (
    <div key={item.id}>
        <p>{item.title}</p>
        <h5>${item.price}.-</h5>
        <img src={item.img} alt="" />
    </div>
  )
}

export default item