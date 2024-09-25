import { createSlice } from "@reduxjs/toolkit";

interface AnswersCounterInt{
    TotalAnswersCounter: number,
    RightAnswersCounter: number,
}
const initialState:AnswersCounterInt = {
    TotalAnswersCounter: 0,
    RightAnswersCounter: 0,
};

const AnswersSlice = createSlice({
    name: "AnswersCounter",
    initialState,
    reducers:{
        rightAnswer(state){
            state.RightAnswersCounter += 1;
        },
        answerDone(state){
            state.TotalAnswersCounter += 1;
        }
    }
});


export const {rightAnswer, answerDone} = AnswersSlice.actions;
export default AnswersSlice.reducer;
