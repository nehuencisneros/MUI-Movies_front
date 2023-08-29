import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {

}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers:{

  }
})

export const { } = loginSlice.actions

export default loginSlice.reducer;

export const loginUser = (values:any) =>async (dispatch: any) => {

  try {
      console.log(values)
  } catch (error) {
    
  }
}