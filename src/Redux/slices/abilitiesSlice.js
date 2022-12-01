import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

// initial state when the app loads
const initialState = {
    heroAbilities: [],
    statusAbilities: 'loading', // loading, loaded, error
    link: 'https://api.opendota.com' 
}

// Asynchronous function that fetches object of all heroes' abilities
export const fetchAllAbilities = createAsyncThunk('hero/fetchAllAbilities', async (heroNpcName) => {  // receive hero name
    const allAbilities = await axios.get(`${initialState.link}/api/constants/abilities/`) // get object with all abilities
    const heroAbilities = await axios.get(`${initialState.link}/api/constants/hero_abilities/`) // get hero stats with array of abilities
    // get the list of ability names for further search
    const heroAbilityNames = heroAbilities.data[heroNpcName].abilities.filter(ability => ability !== 'generic_hidden')
    const abilityList = [] // array for ability objects for our hero
     heroAbilityNames.forEach(ability => {
        abilityList.push(allAbilities.data[ability]) // find ability by name and get object with full info
    });
    return abilityList
})

const heroesSlice = createSlice({
    name: 'ability',
    initialState,
    // reducers: {
    //     setHeroes(state, action) {
    //         state.heroes = action.payload
    //     }
    // },
    extraReducers: (builder) => {
        builder.addCase(fetchAllAbilities.fulfilled, (state, action) => { // sucess, get and save all abilities
            state.heroAbilities = action.payload
            state.statusAbilities = 'loaded'
        })
        builder.addCase(fetchAllAbilities.pending, (state) => { // waiting for a response
            state.statusAbilities = 'loading'
        })
        builder.addCase(fetchAllAbilities.rejected, (state) => { // error TODO: redirect to error page
            state.heroAbilities = []
            state.statusAbilities = 'error'
        })
    }
})

// export const { setHeroes } = heroesSlice.actions

export default heroesSlice.reducer