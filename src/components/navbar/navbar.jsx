import React from 'react'
import './navbar.css'
import img1 from '../../image/amazon-logo-white.png'
import img2 from '../../image/amazon-mobile-logo-white.png'
import img3 from '../../image/icons/cart-icon.png'
import img4 from '../../image/icons/search-icon.png'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



export default function Navbar() {

const cartItems = useSelector(state =>state.cart.cart)
   
  return (
   
        <div className="amazon-header">
          <div className="amazon-header-left-section">
            <Link to='/' className="header-link">
              <img className="amazon-logo"
                src={img1} alt='#'/>
              <img className="amazon-mobile-logo"
                src={img2} alt='#'/>
            </Link>
          </div>

          <div className="amazon-header-middle-section">
            <input className="search-bar" type="text" placeholder="Search"/>

            <button className="search-button">
              <img className="search-icon" src={img4} alt='#'/>
            </button>
          </div>

          <div className="amazon-header-right-section">
            <a className="orders-link header-link" href="orders.html">
              <span className="returns-text">Returns</span>
              <span className="orders-text">& Orders</span>
            </a>

            <Link to='cartcheckout' className="cart-link header-link" >
              <img className="cart-icon" src={img3} alt='#'/>
              <div className="cart-quantity js-cart">{cartItems.length}</div>
              <div className="cart-text">Cart</div>
            </Link>
          </div>
      </div>
     
 
    
       

  )
}
