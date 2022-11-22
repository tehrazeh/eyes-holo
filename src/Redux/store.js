import { configureStore } from "@reduxjs/toolkit";
import hero from './slices/heroesSlice';
import item from './slices/itemsSlice'
import ability from './slices/abilitiesSlice'
import filterHero from './slices/filterHeroesSlice'

const store = configureStore({
    reducer: {
        hero,
        item,
        ability,
        filterHero
    }
})

export default store