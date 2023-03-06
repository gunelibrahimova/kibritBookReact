import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/config";

const initialState = {
    msg: "",
    user: "",
    token: "",
    loading: false,
    error: "",
};

export const signUpUser = createAsyncThunk("signUpUser", async (body) => {
    const res = await fetch(`${BASE_URL}Auth/register`, {
        method: "post",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    return await res.json();
});

export const signInUser = createAsyncThunk("signInUser", async (body) => {
    const res = await fetch(`${BASE_URL}Auth/login`, {
        method: "post",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    return await res.json();
});

const authSlice = createSlice({
    name: "user",
    initialState,
    reducer: {
        addToken: (state, action) => {
            state.token = localStorage.getItem("token");
        },
        addUser: (state, action) => {
            state.user = localStorage.getItem("user");
        },
        logOut: (state, action) => {
            state.token = null;
            localStorage.clear();
        },
    },
    extraReducers: {
        //login
        [signInUser.pending]: (state, action) => {
            state.loading = true;
        },
        [signInUser.fulfilled]: (state, { payload: { error, msg, token, user } }) => {
            state.loading = false;
            if (error) {
                state.error = error;
            } else {
                state.msg = msg;
                state.token = token;
                state.user = user;

                localStorage.setItem("msg", msg);
                localStorage.setItem("user", JSON.stringify(user));
                localStorage.setItem("token", token);
            }
        },
        [signInUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        //register
        [signUpUser.pending]: (state, action) => {
            state.loading = true;
        },
        [signUpUser.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.msg = payload.msg;
        },
        [signUpUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        }


    },
});

export const { addToken, addUser, logOut } = authSlice.actions;
export default authSlice.reducer;
