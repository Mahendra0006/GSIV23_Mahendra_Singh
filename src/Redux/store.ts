// store.js
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers' // You need to create the root reducer

const store = configureStore({
  reducer: rootReducer,
  // You can add additional configuration options here if needed
})

export default store
