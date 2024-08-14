import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AuthState = {
  isAuth: boolean
  userName: string
  uid: string
  isAdmin: boolean
}

type InitialState = {
  value: AuthState
}

const initialState = {
  value: {
    isAuth: false,
    userName: '',
    uid: '',
    isAdmin: false
  } as AuthState
} as InitialState

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: () => {
      return initialState
    },
    logIn: (_, action: PayloadAction<string>) => {
      return {
        value: {
          isAuth: true,
          userName: action.payload,
          uid: action.payload,
          isAdmin: false
        }
      }
    }
  }
})

export const { logIn, logOut } = auth.actions
export default auth.reducer
