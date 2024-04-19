import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./authApi";
import { userApi } from "./userApi";

const authSlice = createSlice({
    name: "authSlice",
    initialState: { user: JSON.parse(localStorage.getItem("user")) },
    reducers: {
        invalidate: (state, { payload }) => {
            payload.forEach(item => {
                state[item] = false
            })
        }
    },
    extraReducers: builder => builder
        .addMatcher(authApi.endpoints.loginUser.matchFulfilled, (state, { payload }) => {
            state.user = payload
        })
        .addMatcher(userApi.endpoints.updateProfile.matchFulfilled, (state, { payload }) => {
            state.user = payload
        })
        .addMatcher(authApi.endpoints.logoutUser.matchFulfilled, (state, { payload }) => {
            state.user = null
        })

})

// export const { invalidate } = authSlice.actions
export default authSlice.reducer