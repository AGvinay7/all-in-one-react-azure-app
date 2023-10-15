import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import '../../models/IBike'
import { IBike } from '../../models/IBike'

let bikesArray: IBike[] = [];
let bikesOwnedByUser: any = {
    bikes: bikesArray,
    loggedInUser:'Vinay'
}

let MyReducers = {
    addBikeDetails: (state: any, action: PayloadAction<any>) => {
        state.bikes = [...state.bikes ?? [], ...action.payload]
    },
    removeBikes: (state: any) => {
       delete state.bikes
    },
    addLoggedInUser: (state: any, action: PayloadAction<string>) => {
        state.loggedInUser = action.payload
    },
}

export const bikeSlice = createSlice({
    name: 'bikess',
    initialState: bikesOwnedByUser,
    reducers: MyReducers
});

export const { addBikeDetails, removeBikes, addLoggedInUser } = bikeSlice.actions
export default bikeSlice.reducer