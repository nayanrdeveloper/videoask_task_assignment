import { configureStore } from '@reduxjs/toolkit'
import pageSlice from './features/pageSlice'


export const store = configureStore({
    reducer: {
        page: pageSlice
    },
  })