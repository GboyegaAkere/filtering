import { createSlice } from "@reduxjs/toolkit";
import data from "../db/data";
const initialState = {
    data:data
}

export const productSlice = createSlice({
    name:"data",
    initialState,
    reducers:{}
})