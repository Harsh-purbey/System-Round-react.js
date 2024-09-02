import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

// fetchCards function for fetch data throung api

export const fetchCards = createAsyncThunk('fetchCards', async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();

})

// creating card slice 

const CardSlice = createSlice({

    name:"cardslice",
// card store initial value
    initialState:{
        isLoading :false,
        data:[],
        isError:false,
    },

    extraReducers: (builder) => {

        builder.addCase(fetchCards.pending , (state,action) => {
            state.isLoading = true;
        })

        builder.addCase(fetchCards.fulfilled , (state,action) => {
            state.isLoading = false;
            state.data = action.payload; 
        })

        builder.addCase(fetchCards.rejected , (state,action) => {
            state.isError = true;
        })

    }
})

export default CardSlice.reducer;