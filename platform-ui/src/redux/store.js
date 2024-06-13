import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/reducer'
import cartReducer from './cart/reducer'
const setupStore = (preloadedState) => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      cart: cartReducer
    },
    preloadedState
  })
}

export default setupStore
