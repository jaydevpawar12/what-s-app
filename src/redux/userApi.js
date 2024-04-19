import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/user`,
        credentials: "include",
    }),
    endpoints: (builder) => {
        return {
            updateProfile: builder.mutation({
                query: profileData => {
                    return {
                        url: "/update",
                        method: "POST",
                        body: profileData
                    }
                },
                transformResponse:data=>{
                    localStorage.setItem("user",JSON.stringify(data.result));
                    return data.result;
                }
            }),

        }
    }
})

export const { useUpdateProfileMutation } = userApi
