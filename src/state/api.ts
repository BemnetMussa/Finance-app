import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse, GetProductResponse } from "./types";

export const api = createApi({
    // The base URL for all API requests. This is pulled from environment variables.
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    reducerPath: "main",
    tagTypes: ['Kpis', "Products"],
   
    endpoints: (build) => ({
        getKpis: build.query<Array<GetKpisResponse>, void>({
            // will make a GET request to the base URL + "kpi/kpis/"
            query: () => "kpi/kpis/",
            providesTags: ["Kpis"]
        }),
        getProducts: build.query<Array<GetProductResponse>, void>({
            // will make a GET request to the base URL + "kpi/kpis/"
            query: () => "product/products/",
            providesTags: ["Products"]
        })
    })
    
})

export const {useGetKpisQuery, useGetProductsQuery } = api;
