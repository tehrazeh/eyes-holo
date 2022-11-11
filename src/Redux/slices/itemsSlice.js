import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

// Asynch function that fetches object of all the abilities
export const fetchItems = createAsyncThunk('hero/fetchAllitems', async () => {
    const response = await axios.get('https://api.opendota.com/api/constants/items')

    return Object.values(response.data) // convet to array of objects
})


// initial state of this slice
const initialState = {
    items: [],
    status: 'loading', // loading, loaded, error
    link: 'https://api.opendota.com' 
}

const itemsSlice = createSlice({
    name: 'item',
    initialState,
    // reducers: {
    //     setItems(state, action) {
    //         state.items = action.payload
    //     }
    // },
    extraReducers: (builder) => {
        builder.addCase(fetchItems.fulfilled, (state, action) => { // sucess, get and save abilities to redux
            state.items = action.payload
            state.status = 'loaded'
        })
        builder.addCase(fetchItems.pending, (state) => { // waiting for a response
            state.status = 'loading'
        })
        builder.addCase(fetchItems.rejected, (state) => { // error, redirect to error page based on status
            state.items = []
            state.status = 'error'
        })
    }
})


// export const { setItems } = itemsSlice.actions

export default itemsSlice.reducer