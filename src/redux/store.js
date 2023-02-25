import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Reducer/cartReducer";

const store = configureStore({
    reducer: {
        cart : cartReducer
    }
})

export default store