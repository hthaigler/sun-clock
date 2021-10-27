import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TimeData {
  timezone: string,
  time: Date
}

const defaultTimezone = "America/New_York"

const initialState: TimeData = {
  timezone: defaultTimezone,
  time: new Date(new Date().toLocaleString('en-US', { timeZone: defaultTimezone }))
}

export const TimeState = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setTimezone: (state, action: PayloadAction<string>) => {
      state.timezone = action.payload
      state.time = new Date(new Date().toLocaleString('en-US', { timeZone: action.payload }))
      return state
    },
  },
})

export const { setTimezone } = TimeState.actions

export default TimeState.reducer