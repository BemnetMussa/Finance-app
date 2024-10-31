import { createApi, fetchBaseQuery } from "@redux.js/toolkit/query/react*";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    reducerPath: "main",
    tagTypes: [],
    endpoints: (build) => ({
        getKpis: build.query({
            query: () => "kpi/kpis/",
            providesTags: ["Kpis"]
        })
    })
})

export const {useGetKpisQuery } = api;