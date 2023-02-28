import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Reducer/authSlice";
import cartSlice from "./Reducer/cartSlice";



const store = configureStore({
    reducer: {
        cart : cartSlice,
        user : authSlice
    }
})

export default store