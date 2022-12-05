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
    itemRecipe: null,
    status: 'loading', // loading, loaded, error
    link: 'https://api.opendota.com'
}

const itemsSlice = createSlice({
    name: 'item',
    initialState,
    reducers: { // get and save components of selected item
        setComponents(state, action) {
            const componentElements = [] // TODO! refactor to not use this variable and change the state
            let componentCosts = 0
            if (action.payload.componentNames !== null) { // item has components
                action.payload.componentNames.forEach(component => {
                    // for exceptions like dagon, necronomicon and items with '' in components array like trident
                    if (!component.startsWith('recipe_') && component.length !== 0) {
                        componentElements.push(state.items[component])
                    }
                })
                state.itemComponents = componentElements
                // get the cost of components to determine if the item has recipe
                componentCosts = componentElements.reduce((sum, component) => {
                    return sum + component.cost
                }, 0)
            } else { // item has no components, reset the array
                state.itemComponents = []
            }

            // if sum of components less than item cost, and there are components, then we add a recipe
            if (componentCosts < action.payload.itemCost && componentCosts !== 0) {
                state.itemRecipe = {
                    name: action.payload.itemName + " Recipe",
                    cost: action.payload.itemCost - componentCosts,
                    img: "/apps/dota2/images/dota_react/items/recipe.png"
                }
            } else { // no recipe for the current item, delete last entry
                state.itemRecipe = null
            }

        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchItems.fulfilled, (state, action) => { // sucess, get and save abilities to redux
            // filter endless recipe entries
            state.items = Object.fromEntries(Object.entries(action.payload).filter(([key]) => !key.startsWith('recipe_')))
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

export const selectItemsByQuality = (itemQuality) => (state) => {
    const filteredItems = []
    const newItems = {...state.item.items}
    for (let item in newItems) {

        // for items that do not have quality property and skip items with undefined name
        if (!state.item.items[item].hasOwnProperty('qual') && state.item.items[item].dname) {
            newItems[item] = {...state.item.items[item]}
            newItems[item].qual = 'unknown'
        }
        if (newItems[item].qual === itemQuality) {
            filteredItems.push(newItems[item])
        }
    }
    return filteredItems
}


export const { setComponents } = itemsSlice.actions

export default itemsSlice.reducer