
import React from 'react'
import Home from './components/home/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './pages/carts/carts'




function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='cartcheckout' element={<Cart/>}/>
  

    </Routes>
    
    </BrowserRouter>
   
  )
}

export default App