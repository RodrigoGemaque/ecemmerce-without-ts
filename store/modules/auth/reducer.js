

import {createSlice} from '@reduxjs/toolkit'


const initialState = {loggedUser: null }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedUser(state, action  ){
      state.loggedUser = action.payload
    },
    clearLoggedUser(state){
      state.loggedUser = null
    }
  }
})

export const {setLoggedUser, clearLoggedUser} = authSlice.actions
export default authSlice.reducer 
