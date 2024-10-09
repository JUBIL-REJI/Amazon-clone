import React from 'react'
import './carts.css'
import { useDispatch, useSelector } from 'react-redux'
import { remvefromCart } from '../../Redux/sliceRedux'
import { Link } from 'react-router-dom'




function Cart() {

 const cartItem = useSelector(state=>state.cart.cart )
 const dispatch =useDispatch()
   console.log(cartItem.length);

  return (

        cartItem.length === 0 ? <div><h1 className='empty-cart'>cart is empty</h1><Link to={'/'}>CONTINUE SHOPPING</Link></div>:

        <div className="container">
            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="ibox-title">
                {cartItem.length <= 1?<span className="pull-right">(<strong>{cartItem.length}</strong>) item  in your cart</span>:
                <span className="pull-right">(<strong>{cartItem.length}</strong>) items  in your cart <Link to ={'/'}>go to home page</Link></span>}
                    </div>
                    {cartItem?.map((items ,index)=>{
                    return(
                    <div className="row" key={index}>
                        <div className="col-md-9">
                            <div className="ibox">
                                
                                <div className="ibox-content">
                                    <div className="table-responsive">
                                        <table className="table shoping-cart-table">
                                            <tbody>
                                            <tr>
                                                <td >
                                                    <div >
                                                    <img src={items.image} className="cart-product-imitation"alt='/'/>
                                                    </div>
                                                </td>
                                                <td className="desc">
                                                    <h3>                                          
                                                        {items.name}                                              
                                                    </h3>
                                                    <div className="m-t-sm">
                                                        <button onClick={()=>dispatch(remvefromCart({id:items.id}))} >remove</button>
                                                    </div>
                                                </td>

                                                <td>
                                                    {items.price}
                                                    <s className="small text-muted">$230,00</s>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div> 
                            </div>
                        </div>
                    </div>
                        
                    )})}
             </div>
        </div>
        
        )
        }

export default Cart
