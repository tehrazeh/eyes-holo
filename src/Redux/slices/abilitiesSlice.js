import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

// initial state when the app loads
const initialState = {
    heroAbilities: [],
    status: 'loading', // loading, loaded, error
    link: 'https://api.opendota.com' 
}

// Asynchronous function that fetches object of all heroes' abilities
export const fetchAllAbilities = createAsyncThunk('hero/fetchAllAbilities', async (heroNpcName) => { 
    const allAbilities = await axios.get(`${initialState.link}/api/constants/abilities/`)
    const heroAbilities = await axios.get(`${initialState.link}/api/constants/hero_abilities/`)
    const heroAbilityNames = heroAbilities.data[heroNpcName].abilities.filter(ability => ability !== 'generic_hidden')
    const abilityList = []
     heroAbilityNames.forEach(ability => {
        abilityList.push(allAbilities.data[ability])
    });
    return abilityList
})

// Async function that fetches object of heroes and their ability names
// export const fetchAbilitiesAndTalents = createAsyncThunk('hero/fetchAbilitiesAndTalents', async () => {
//     const response = await axios.get(`${initialState.link}/constants/hero_abilities/`)
//     return response.data
// })

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
            state.status = 'loaded'
        })
        builder.addCase(fetchAllAbilities.pending, (state) => { // waiting for a response
            state.status = 'loading'
        })
        builder.addCase(fetchAllAbilities.rejected, (state) => { // error TODO: redirect to error page
            state.heroAbilities = []
            state.status = 'error'
        })


        // builder.addCase(fetchAbilitiesAndTalents.fulfilled, (state, action) => { // sucess, get and save hero abilities and talents
        //     state.abilitiesAndTalents = action.payload
        //     state.status = 'loaded'
        // })
        // builder.addCase(fetchAbilitiesAndTalents.pending, (state) => { // waiting for a response
        //     state.status = 'loading'
        // })
        // builder.addCase(fetchAbilitiesAndTalents.rejected, (state) => { // error TODO: redirect to error page
        //     state.abilitiesAndTalents = {}
        //     state.status = 'error'
        // })
    }
})


// selector to get array of heroes based on the attribute
// export const selectHeroAbilities = (heroNpcName) => (state) => {
//     // return state.ability.abilitiesAndTalents[heroNpcName].abilities // array of ability names
//     console.log('ability selector ' + heroNpcName)
// }



// export const { setHeroes } = heroesSlice.actions

export default heroesSlice.reducer