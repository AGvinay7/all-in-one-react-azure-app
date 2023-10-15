import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import { ICar } from '../../models/ICar';
let carsOwnedByUser: ICar[] = []
let carsObj={ 
    carsOwnedByUser
}
let myCarReducers = {
    addCarDetail:(state:any, action:PayloadAction<any>)=>{
        state.carsOwnedByUser = [...state.carsOwnedByUser ?? [], ...action.payload]
    },
    removeCars:(state:any)=>{
        state.carsOwnedByUser = [];
    }
}
export const carSlice = createSlice({
    name:'cars',
    reducers: myCarReducers,
    initialState: carsObj
})

export const {addCarDetail, removeCars} = carSlice.actions
export default carSlice.reducer