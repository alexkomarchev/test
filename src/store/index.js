import {configureStore} from "@reduxjs/toolkit";
import newReducer from "./PagesSlice"

export const store=configureStore(
    {
        reducer:{
            newReducer
        }
    }
)