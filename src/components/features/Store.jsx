import {configureStore} from "@reduxjs/toolkit"
import moviesslicereducer from "./Slice"
export const Store = configureStore({
    reducer:{
        moviesList : moviesslicereducer
    }
})