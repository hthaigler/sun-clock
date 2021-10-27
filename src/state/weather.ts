import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export
interface WeatherData {
  main: {
    temp: number,
    humidity: number
  },
  sys: {
    sunrise: number,
    sunset: number
  }
}
const initialState: WeatherData = {
    main: {
        temp: 0,
        humidity: 0
    },
    sys: {
        sunrise: 0,
        sunset: 0
    }
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    updateWeather: (state, action: PayloadAction<WeatherData>) => {
      state = action.payload
      return state
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateWeather } = weatherSlice.actions

export default weatherSlice.reducer