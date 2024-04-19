import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const chatApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/chat`,
        credentials: "include",
    }),
    endpoints: (builder) => {
        return {
            sendMessage: builder.mutation({
                query: messageData => {
                    return {
                        url: "/send",
                        method: "POST",
                        body: messageData
                    }
                },
            }),
            getContact: builder.query({
                query: messageData => {
                    return {
                        url: "/contact",
                        method: "GET",
                    }
                },
                transformResponse: data => data.result
            }),

        }
    }
})

export const { useSendMessageMutation, useGetContactQuery } = chatApi
