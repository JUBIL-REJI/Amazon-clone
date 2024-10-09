import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './sliceRedux'


export const store = configureStore({
  reducer: {
    cart:cartSlice
  },
})