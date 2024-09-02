import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "./slice/CardSlice";

// create redux toolkit store for state mangement

const Store = configureStore({
    reducer:{
        card:CardSlice
    }
})

export default Store;