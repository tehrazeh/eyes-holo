import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    searchValue: '', // text from input
    rolesFilter: {
        'Carry': false,
        'Support': false
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
            // console.log(!state.rolesFilter['carry'])
        }, 
        setRoleFilter(state, action) {
            state.rolesFilter[action.payload] = !state.rolesFilter[action.payload]
        } 
    }
})

export const {setSearchValue, clearSearchValue, setRoleFilter} = filterHeroseSlice.actions

export default filterHeroseSlice.reducer