import { configureStore } from "@reduxjs/toolkit";
import hero from './slices/heroesSlice';
import item from './slices/itemsSlice'
import ability from './slices/abilitiesSlice'
import filterHero from './slices/filterHeroesSlice'
import filterItem from "./slices/filterItemsSlice";

const store = configureStore({
    reducer: {
        hero,
        item,
        ability,
        filterHero,
        filterItem
    }
})

export default store