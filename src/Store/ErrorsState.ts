import { createSlice } from "@reduxjs/toolkit";

interface DisplayErrorInt{
    displayTotAnswerError: boolean
}

const initialState: DisplayErrorInt = {
    displayTotAnswerError: false,
}

const DisplayErrorSlice = createSlice({
    name: "DisplayError",
    initialState,
    reducers:{
        answerErrorIsThere(state){
            state.displayTotAnswerError = true;
        },
        answerErrorIsNotThere(state){
            state.displayTotAnswerError = false;
        }
    }
})

export const {answerErrorIsThere, answerErrorIsNotThere} = DisplayErrorSlice.actions;
export default DisplayErrorSlice.reducer;