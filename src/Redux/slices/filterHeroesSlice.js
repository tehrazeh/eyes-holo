import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    searchValue: '', // text from input
    rolesFilter: {
        'Carry': {
            isActive: false,
            description: 
            `Will become more useful later in the game if they
            gain a significant gold advantage.`

        },
        'Support': {
            isActive:false,
            description: 
            `Can focus less on amassing gold and items,
            and more on using their abilities to gain
            an advantage for the team.`
        }
    }
}

const filterHeroseSlice = createSlice({
    name: 'filterHero',
    initialState,
    reducers: {
        setSearchValue(state, action) {
            state.searchValue = action.payload
        },
        clearSearchValue(state) {
            state.searchValue = ''
        }, 
        setRoleFilter(state, action) {
            state.rolesFilter[action.payload].isActive = !state.rolesFilter[action.payload].isActive
        } 
    }
})

export const {setSearchValue, clearSearchValue, setRoleFilter} = filterHeroseSlice.actions

export default filterHeroseSlice.reducer