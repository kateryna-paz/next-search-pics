import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Book } from '@/app/(data)/interfaces'

const initialState = {
  favourites: [] as Book[]
}

export const favourites = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavourite: (state, action: PayloadAction<Book>) => {
      if (state.favourites.some(book => book.id === action.payload.id)) {
        return
      }
      state.favourites = [...state.favourites, action.payload]
    },
    removeFavourite: (state, action: PayloadAction<Book>) => {
      state.favourites = state.favourites.filter(
        book => book.id !== action.payload.id
      )
    }
  }
})

export const { addFavourite, removeFavourite } = favourites.actions
export default favourites.reducer
