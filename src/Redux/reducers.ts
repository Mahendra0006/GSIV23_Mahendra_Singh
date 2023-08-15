// reducers.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: {},
} // Define your initial state here

const movieSlice = createSlice({
  name: 'movieSlice',
  initialState,
  reducers: {
    update: (state, action) => {
      console.log('REDUX_SET_DATA', action)
      state.data = { ...state.data, ...action.payload }
    },
  },
})

export const { update } = movieSlice.actions
export default movieSlice.reducer
