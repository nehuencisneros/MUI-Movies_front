import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {

}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{

  }
})

export const { } = userSlice.actions

export default userSlice.reducer;

export const logInUser = (values:any) =>async (dispatch: any) => {

  try {
      console.log(values)
  } catch (error) {
    
  }
}

export const signInUser = (values:any) =>async (dispatch: any) => {

  try {
      console.log(values)
  } catch (error) {
    
  }
}