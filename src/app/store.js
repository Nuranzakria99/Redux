import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {productsApi} from './service/dummyData'

configureStore({
    reducer:{
      [productsApi.reducerPath] : productsApi.reducer
    },


    //It using for Cashing
    middleware: (getDefaultMiddleware) => {
        getDefaultMiddleware().concat(productsApi.middleware)
    }
})

// eslint-disable-next-line no-undef
setupListeners(store.dispatch)