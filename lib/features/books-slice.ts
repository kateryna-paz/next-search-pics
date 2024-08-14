import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Book } from '@/app/(data)/interfaces'
import { error } from 'console'

const initialState = {
  books: [] as Book[],
  currentPage: 1,
  totalPages: 1,
}

export const books = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<Book[]>) => {
      state.books = action.payload
      state.totalPages = Math.ceil(action.payload.length / 12)
      
      
    },
    clearBooks: () => {
      return initialState
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    }
  }
})

export const { setBooks, clearBooks, setCurrentPage } = books.actions
export default books.reducer
