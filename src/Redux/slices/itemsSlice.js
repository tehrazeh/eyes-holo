import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchItems = createAsyncThunk('hero/fetchAllitems', async () => {
    const response = await axios.get('https://api.opendota.com/api/constants/items')
    return response.data
})

const initialState = {
    items: {},
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
        builder.addCase(fetchItems.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = 'loaded'
        })
        builder.addCase(fetchItems.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchItems.rejected, (state) => {
            state.items = {}
            state.status = 'error'
        })
    }
})


// export const { setItems } = itemsSlice.actions

export default itemsSlice.reducer