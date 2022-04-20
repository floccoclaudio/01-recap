import { combineReducers } from '@reduxjs/toolkit'
import { store } from './store'
import slice01 from '../features/slice01'

export const rootReducer = combineReducers({
    birbia: slice01,
})

export type RootState = ReturnType<typeof store.getState>
