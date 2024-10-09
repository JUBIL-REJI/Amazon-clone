import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart:[]
  },
  reducers: {
      addTocart:(state,action)=>{
      const itemPresent = state.cart.findIndex((item)=>item.id === action.payload.id); 

      if(itemPresent >= 0){
        state.cart[itemPresent].cartQuantity += 1
      }
     else{
      const product ={...action.payload ,cartQuantity:1} ;
      state.cart.push(product);
     }
     
      },
      remvefromCart:(state,action)=>{
        state.cart=state.cart.filter(x=>x.id !==action.payload.id);
      }
  }

  
})

export default cartSlice.reducer;
export const {addTocart,remvefromCart} = cartSlice.actions;