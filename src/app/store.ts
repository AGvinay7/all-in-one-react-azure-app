import { configureStore } from "@reduxjs/toolkit";
import bikessReducer from '../features/bikes/bikeSlice';
import carsReducer from '../features/cars/carSlice';

export default configureStore({
    reducer:{
        bikes: bikessReducer,
        cars: carsReducer
    },
})