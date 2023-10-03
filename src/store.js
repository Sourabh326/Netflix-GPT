import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./actions/userSlice";

const store = configureStore({
    reducer:{
        user: userSlice
    }
})


export default store;