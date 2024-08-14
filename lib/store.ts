import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth-slice'
import bookReducer from './features/books-slice'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    books: bookReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
