import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  // name of slice (must be unique)
  name: 'auth',
  initialState: {
    // status: false,
    status: sessionStorage.getItem('authStatus') === 'true', // Get from sessionStorage
  },
  reducers: {
    // action: action handler
    login: (state) => {
      state.status = true
      sessionStorage.setItem('authStatus','true')//Store in sessionStorage
    },
    // action: action handler
    logout: (state) => {
      state.status = false
      sessionStorage.setItem('authStatus','false') //Store in sessionStorage
    },
  },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
