import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath:'products', //name of Api Method
    baseQuery: fetchBaseQuery({baseUrl:"https://dummyjson.com"}),
    //Cearing the fisrt Api
    endpoints: (builder) => ({
      //get all products (reading the data)
      getAllProducts: builder.query({
        query: () => '/products'
      })

    })

})

// `use${GetAllProducts}query`

export const {useGetAllProductsQuery} = productsApi