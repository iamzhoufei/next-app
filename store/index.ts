import { configureStore } from '@reduxjs/toolkit'
import globaSlice from './globalSlice'

export default configureStore({
    reducer: {
        global: globaSlice
    }
})