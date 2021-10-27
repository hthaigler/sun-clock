import { configureStore } from '@reduxjs/toolkit'
import Timezone from './state/timezone'
import WeatherSlice from './state/weather'

export const store = configureStore({
  reducer: {
      weather: WeatherSlice,
      timezone: Timezone
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch