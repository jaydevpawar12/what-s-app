import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./authApi";
import authSlice from "./authSlice";
import { userApi } from "./userApi";
import { chatApi } from "./chatApi";


const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [chatApi.reducerPath]: chatApi.reducer,
        auth: authSlice
    },
    middleware: def => [
        ...def(),
        authApi.middleware,
        userApi.middleware,
        chatApi.middleware,
    ]
})

export default reduxStore