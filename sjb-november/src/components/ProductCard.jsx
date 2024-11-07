import React from 'react'

function ProductCard(props) {
    const {id, title, price, category, description, image} = props.product
  return (
    <div className='col'>
        <div className="card">
            <img src={image} alt="" className="card-img-top" />
            <div className="card-body">
                <h5 className='card-title'>{title}</h5>
                <h1 className='price-number'>$ {price}</h1>
                <span className='badge text-bg-primary'>{category}</span>
            </div>
        </div>
    </div>
  )
}

export default ProductCard