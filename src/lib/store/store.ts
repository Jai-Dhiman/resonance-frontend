import { configureStore } from '@reduxjs/toolkit'
import { artistApi } from './services/artistApi'
import uiReducer from './slices/uiSlice'
import searchReducer from './slices/searchSlice'

export const store = configureStore({
  reducer: {
    [artistApi.reducerPath]: artistApi.reducer,
    ui: uiReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(artistApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch