import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: string = "America/New_York"

export const Timezone = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setTimezone: (state, action: PayloadAction<string>) => {
      state = action.payload
      return state
    },
  },
})

export const { setTimezone } = Timezone.actions

export default Timezone.reducer