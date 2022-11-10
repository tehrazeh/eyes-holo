import { configureStore } from "@reduxjs/toolkit";
import hero from './slices/heroesSlice';
import item from './slices/itemsSlice'

const store = configureStore({
    reducer: {
        hero,
        item
    }
})

export default store