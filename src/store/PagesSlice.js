import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const getPage=createAsyncThunk(
    "getPage",
    async  function (id,{dispatch,rejectWithValue}){
        try {
           const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            if(response.status===200){
                const data=await response.json()
                return data
            }
        }catch {
            return rejectWithValue("error")
        }
    }
)
export const PageSlice = createSlice({
    name:"PageSlice",
    initialState:{
        objectPage:{}
    },reducers:{

    },extraReducers:builder => {
        builder.addCase(getPage.fulfilled,(state, action)=>{
            state.objectPage=action.payload
            console.log(action.payload)
        })
    }
})

export default PageSlice.reducer

