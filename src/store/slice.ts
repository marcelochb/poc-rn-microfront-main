import { ITheme } from '@poc/interfaces'
import { ThemeBase } from '@poc/theme'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '.'

// Define a type for the slice state
export interface CounterState {
  value: ITheme
}

// Define the initial state using that type
const initialState: CounterState = {
  value: ThemeBase.Midway
}

export const counterSlice = createSlice({
  name: 'theme',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<ITheme>) => {
      state.value = action.payload
    },
  },
})

export const { changeTheme } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.theme.value

export default counterSlice.reducer
