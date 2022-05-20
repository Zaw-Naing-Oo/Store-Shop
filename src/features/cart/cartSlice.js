import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
import CartItems from '../../cartItems';

const initialState = {
    cartItems : cartItems,
    // cartItems : [],
    total : 0,
    amount : 4,
    isLoading : true
}

const url = 'https://course-api.com/react-useReducer-cart-project';

// you can access the whole state using thunkApi . And also can get dispatch
export const getCartItems = createAsyncThunk('cart/getCartItems', async (name, thunkAPI) => {
    // console.log(name);
    // console.log(thunkAPI);
    // console.log(thunkAPI.getState());
    // console.log(thunkAPI.dispatch);
    return fetch(url)
      .then( res => res.json())
      .catch( err => console.log(err));
});

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        clearCart: (state) => {
            state.cartItems = [];
        },
        increase: (state, action) => {
        //   console.log(state, action)
            const cartItemid = action.payload;
            const cartItem = state.cartItems.find(cart => cart.id === cartItemid); 
            cartItem.amount = cartItem.amount + 1
        },
        decrease: (state, action) => {
            // console.log(state, action)
            const cartItemid = action.payload;
            const cartItem = state.cartItems.find(cart => cart.id === cartItemid); 
            cartItem.amount = cartItem.amount - 1
        },
        removeItem: (state, actions) => {
            // console.log(actions)
            const cartItemId = actions.payload;
            state.cartItems = state.cartItems.filter( cart => cart.id !== cartItemId);
        },
        calculateTotal: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach( (item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            console.log(state.total);
            state.amount = amount;
            state.total = total;
        }
    },
    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.isLoading = true
        },[getCartItems.fulfilled]: (state, action) => {
            // console.log(action);
            state.isLoading = false;
            state.cartItems = action.payload
        },[getCartItems.rejected]: (state) => {
            state.isLoading = false
        }
    }
})

// console.log(cartSlice)
export const { clearCart, increase, decrease, removeItem, calculateTotal } = cartSlice.actions;
export default cartSlice.reducer