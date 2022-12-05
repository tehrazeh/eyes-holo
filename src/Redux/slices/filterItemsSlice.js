import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchValue: ''
}

const filterItemsSlice = createSlice({
    name: 'filterItem',
    initialState,
    reducers: {
        setSearchValue(state, action) {
            state.searchValue = action.payload
        },
        clearSearchValue(state) {
            state.searchValue = ''
        }, 
    }
})

export const {setSearchValue} = filterItemsSlice.actions

export default filterItemsSlice.reducer