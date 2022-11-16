import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

// Asynch function that fetches object of all the abilities
export const fetchItems = createAsyncThunk('hero/fetchAllitems', async () => {
    const response = await axios.get('https://api.opendota.com/api/constants/items')
    return response.data // convet to array of objects
})


// initial state of this slice
const initialState = {
    items: {},
    itemComponents: [],
    status: 'loading', // loading, loaded, error
    link: 'https://api.opendota.com'
}

const itemsSlice = createSlice({
    name: 'item',
    initialState,
    reducers: { // get and save components of selected item
        setComponents(state, action) {
            const componentElements = []
            if (action.payload !== null) { // item has components
                action.payload.forEach(component => componentElements.push(state.items[component]))
                state.itemComponents = componentElements
            } else { // item has no components, reset the array
                state.itemComponents = [] 
            }          
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchItems.fulfilled, (state, action) => { // sucess, get and save abilities to redux
            state.items = action.payload
            state.status = 'loaded'
        })
        builder.addCase(fetchItems.pending, (state) => { // waiting for a response
            state.status = 'loading'
        })
        builder.addCase(fetchItems.rejected, (state) => { // error, redirect to error page based on status
            state.items = {}
            state.status = 'error'
        })
    }
})

// selector to get the item by id
export const selectItemById = (itemId) => (state) => {
    const asArray = Object.entries(state.item.items) // change objects of items to array of objects
    const selectedItem = asArray.filter(([key, value]) => value.id.toString() === itemId) // get the selected item
    return Object.fromEntries(selectedItem) // create object for selected item and return it
    // return Object.fromEntries(Object.entries(items).filter(([key, value]) => value.id === itemId))
}

export const { setComponents } = itemsSlice.actions

export default itemsSlice.reducer