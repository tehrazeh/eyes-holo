import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    searchValue: '' // text from input
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
        } 
    }
})

export const {setSearchValue, clearSearchValue} = filterHeroseSlice.actions

export default filterHeroseSlice.reducer