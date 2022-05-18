import { configureStore } from "@reduxjs/toolkit";
import reducer from  './features/cart/cartSlice'
import modalReducer from './features/modal/modalSlice';

export const store = configureStore({
    reducer : {
        cart : reducer, 
        modal : modalReducer
    },
});
// console.log(store)