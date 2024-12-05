import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SearchState {
  searchHistory: string[]
  currentQuery: string
}

const initialState: SearchState = {
  searchHistory: [],
  currentQuery: '',
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setCurrentQuery: (state, action: PayloadAction<string>) => {
      state.currentQuery = action.payload
    },
    addToHistory: (state, action: PayloadAction<string>) => {
      if (!state.searchHistory.includes(action.payload)) {
        state.searchHistory = [action.payload, ...state.searchHistory].slice(0, 5)
      }
    },
    clearHistory: (state) => {
      state.searchHistory = []
    },
  },
})

export const { setCurrentQuery, addToHistory, clearHistory } = searchSlice.actions
export default searchSlice.reducer