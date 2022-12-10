import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentLvl: 1
}


const heroStatsSlice = createSlice({
    name: 'heroStats',
    initialState,
    reducers: {
        setHeroLvl(state, action) {
            state.currentLvl = action.payload
        }
    }
})

export const {setHeroLvl} = heroStatsSlice.actions

export default heroStatsSlice.reducer