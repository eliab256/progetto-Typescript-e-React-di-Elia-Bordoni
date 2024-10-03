import { createSlice } from '@reduxjs/toolkit';

interface DisplayErrorInt {
    displayTotAnswerError: boolean;
}

const initialState: DisplayErrorInt = {
    displayTotAnswerError: false,
};

const DisplayErrorSlice = createSlice({
    name: 'DisplayError',
    initialState,
    reducers: {
        answerErrorIsThere(state) {
            state.displayTotAnswerError = true;
        },
        answerErrorIsNotThere(state) {
            state.displayTotAnswerError = false;
        },
        resetErrorState: () => initialState,
    },
});

export const { answerErrorIsThere, answerErrorIsNotThere, resetErrorState } = DisplayErrorSlice.actions;
export default DisplayErrorSlice.reducer;
