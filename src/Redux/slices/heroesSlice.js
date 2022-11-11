import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


// Asynchronous function that fetches array of all heroes
export const fetchHeroes = createAsyncThunk('hero/fetchAllHeroes', async () => {
    const response = await axios.get('https://api.opendota.com/api/heroStats')
    return response.data
})

// initial state when the app loads
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
        builder.addCase(fetchHeroes.fulfilled, (state, action) => { // sucess, get and save heroes
            state.heroes = action.payload
            state.status = 'loaded'
        })
        builder.addCase(fetchHeroes.pending, (state) => { // waiting for a response
            state.status = 'loading'
        })
        builder.addCase(fetchHeroes.rejected, (state) => { // error TODO: redirect to error page
            state.heroes = []
            state.status = 'error'
        })
    }
})


// selector to get array of heroes based on the attribute
export const selectHeroByAttribute = (mainAttribute) => (state) => state.hero.heroes.filter((hero) => {
    return hero.primary_attr === mainAttribute
})

// sekectir to get specific hero by its id
export const selectHeroById = (heroId) => (state) => state.hero.heroes.filter((hero) => {
   return hero.id.toString() === heroId
   })


// export const { setHeroes } = heroesSlice.actions

export default heroesSlice.reducer