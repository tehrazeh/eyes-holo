import { configureStore } from "@reduxjs/toolkit";
import hero from './slices/heroesSlice';

const store = configureStore({
    reducer: {
        hero
    }
})

export default store