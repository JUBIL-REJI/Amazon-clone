import React from 'react'
import './product.css'
import img1 from '../../image/icons/checkmark.png'
import { useDispatch } from 'react-redux'
import { addTocart } from '../../Redux/sliceRedux'


function Products({image,name,price,id}) {

      const dispatch = useDispatch()

  return (
    <div >
      <div >
        <div className="product-container">
          <div className="product-image-container">
            <img className="product-image"
              src={image} alt='#'/>
          </div>

          <div className="product-name limit-text-to-2-lines">
           {name}
          </div>

          <div className="product-rating-container">
            <img className="product-rating-stars"
              src="images/ratings/rating-45.png" alt='#'/>
            <div className="product-rating-count link-primary">
              87
            </div>
          </div> 

          <div className="product-price">
            {price}₹
          </div>

          <div className="product-quantity-container">
            <select>
              <option  value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div className="product-spacer"></div>

          <div className="added-to-cart">
            <img src={img1} alt='#'/>
            Added
          </div>

          <button className="add-to-cart-button button-primary" onClick={()=>dispatch(addTocart({id,image,name,price}))}>
            Add to Cart
          </button>
        </div>
      </div>
      </div>
        
        
  )
}

export default Products