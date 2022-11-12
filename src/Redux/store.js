import { configureStore } from "@reduxjs/toolkit";
import hero from './slices/heroesSlice';
import item from './slices/itemsSlice'
import ability from './slices/abilitiesSlice'

const store = configureStore({
    reducer: {
        hero,
        item,
        ability
    }
})

export default store