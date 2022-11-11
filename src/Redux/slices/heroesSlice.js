import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchHeroes = createAsyncThunk('hero/fetchAllHeroes', async () => {
    const response = await axios.get('https://api.opendota.com/api/heroStats')
    return response.data
})

const initialState = {
    heroes: [],
    status: 'loading', // loading, loaded, error
    link: 'https://api.opendota.com' 
}

const heroesSlice = createSlice({
    name: 'hero',
    initialState,
    // reducers: {
    //     setHeroes(state, action) {
    //         state.heroes = action.payload
    //     }
    // },
    extraReducers: (builder) => {
        builder.addCase(fetchHeroes.fulfilled, (state, action) => {
            state.heroes = action.payload
            state.status = 'loaded'
        })
        builder.addCase(fetchHeroes.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchHeroes.rejected, (state) => {
            state.heroes = []
            state.status = 'error'
        })
    }
})

export const selectHeroByAttribute = (mainAttribute) => (state) => state.hero.heroes.filter((hero) => {
    return hero.primary_attr === mainAttribute
})

export const selectHeroById = (heroId) => (state) => state.hero.heroes.filter((hero) => {
   return hero.id.toString() === heroId
   })


// export const { setHeroes } = heroesSlice.actions

export default heroesSlice.reducer