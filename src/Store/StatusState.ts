import {createSlice} from "@reduxjs/toolkit";

interface statusStateInt{
    isLoading: boolean,
    error: string,
};

const initialState:statusStateInt = {
    isLoading: false,
    error:"",
};

export const statusStateSlice = createSlice({
    name:"status",
    initialState,
    reducers:{
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        resetStatus: (state) => {
            state.isLoading = false;
            state.error = "";
        },
    }

})

export const {setLoading, setError, resetStatus} = statusStateSlice.actions;
export default statusStateSlice.reducer;