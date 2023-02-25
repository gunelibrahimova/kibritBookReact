import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data : [],
    loading : false,
    error : "",
    cart : [],
    totalQuantity : 0,
    totalPrice : 0
}

export const fetchBook = createAsyncThunk("fetchBook", async () => {
    const response = await axios.get("https://localhost:44351/api/Book/bookList");
    console.log(response.data);
    return response.data;
})

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers : {
        addToCart : (state, action) => {
            const newItem = {
                id: action.payload.id,
                name : action.payload.name,
                price: action.payload.price
            }
            state.push(newItem)
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchBook.pending, (state,action) =>{
            state.loading = true;
            state.error = ""
        });
        builder.addCase(fetchBook.fulfilled, (state,action) => {
            state.data = action.payload;
            state.loading = false
        });
        builder.addCase(fetchBook.rejected, (state,action) => {
            state.loading = true;
            state.error = "Error"
        })
    }
})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer