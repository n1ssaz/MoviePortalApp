import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favourites: [],
  watchLater: [],

}



export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    reset: ()=> initialState,
    addFavourite: (state,action) => {

        const isExisting = state.favourites.includes(action.payload)
        if (isExisting) {
            
            state.favourites = [...state.favourites.filter(favourite => favourite!==action.payload)];
        } else {
            state.favourites = [...state.favourites, action.payload]
        }
    },

    toggleWatchLater: (state,action) => {

        const isExisting = state.watchLater.includes(action.payload)
        if (isExisting) {
            
            state.watchLater = [...state.watchLater.filter(watchLater => watchLater!==action.payload)];
        } else {
            state.watchLater = [...state.watchLater, action.payload]
        }
    },

 
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addFavourite,toggleWatchLater, reset } = dataSlice.actions

export default dataSlice.reducer