import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/auth", credentials: "include" }),
    tagTypes: ["user"],
    endpoints: (builder) => {
        return {
            registerUser: builder.mutation({
                query: userData => {
                    return {
                        url: "/",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["user"]
            }),
            loginUser: builder.mutation({
                query: userData => {
                    return {
                        url: "/login",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.setItem("user", JSON.stringify(data.result))
                    return data.result
                },
                invalidatesTags: ["user"]
            }),
            logoutUser: builder.mutation({
                query: userData => {
                    return {
                        url: "/logout",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.removeItem("user")
                    return data
                },
                invalidatesTags: ["user"]
            }),

        }
    }
})

export const { useRegisterUserMutation, useLoginUserMutation, useLogoutUserMutation } = authApi
