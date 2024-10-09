import React from 'react'
import Navbar from '../navbar/navbar'
import Products from '../../pages/product/products'
import data from '../../data.json'
import Footer from '../footer/footer'

function Home() {
  return (
      <div>
        
        <div>
            <Navbar/>
            </div>
       
            <div className="main">
              <div className="products-grid js-produts-grid" >
                  {data.map((product, index)=>{
                      return(
                      <Products product={product}  image={product.image} price={product.priceCents} name={product.name} key={index} id={product.id}/>
                    )})}

              </div>
            </div>

            <div>
              <Footer/>
            </div>
         
       </div>
  )
}

export default Home