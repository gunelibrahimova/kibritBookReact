import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    msg: "", 
    user : "",
    token : "",
    loading : false,
    error : ""
}

export const signUpUser = createAsyncThunk("signUpUser", async(body)=>{
    const res = fetch("https://localhost:44351/api/Auth/register", {
        method:"post", 
        headers: {
            'Content-Type' : "application/json"
        },
        body: JSON.stringify(body)
    })
    return res.json()

    console.log(res.json);
})

export const signInUser = createAsyncThunk("signInUser", async(body)=>{
    const res = fetch("https://localhost:44351/api/Auth/login", {
        method:"post", 
        headers: {
            'Content-Type' : "application/json"
        },
        body: JSON.stringify(body)
    })
    return res.json()
})

const authSlice = createSlice({
    name: "user",
    initialState,
    redicer: {
        addToken : (state,action) => {
            state.token = localStorage.getItem("token")
        },
        addUser : (state,action) => {
            state.user = localStorage.getItem("user")
        },
        logOut : (state,action) => {
           state.token = null
           localStorage.clear()
        }
    },
    extraReducers : {
        //login
        [signInUser.pending]: (state, action) => {
            state.loading = true;
        },
        [signInUser.fulfilled]: (state, {payload:{error,msg, token, user}}) => {
            state.loading = false;
            if(error){
                state.error = error
            }
            else{
                state.msg = msg
                state.token = token
                state.user = user

                localStorage.setItem('msg',msg)
                localStorage.setItem('user', JSON.stringify(user))
                localStorage.setItem('token',token)
            }
        },
        [signInUser.rejected]: (state, action) => {
            state.loading = true;
        },
        //register
        [signUpUser.pending]: (state, action) => {
            state.loading = true;
        },
        [signUpUser.fulfilled]: (state, {payload:{error,msg}}) => {
            state.loading = false;
            if(error){
                state.error = error
            }
            else{
                state.msg = msg
            }
        },
        [signUpUser.rejected]: (state, action) => {
            state.loading = true;
        }
    }
})

export const {addToken, addUser, logOut} = authSlice.actions
export default authSlice.reducer