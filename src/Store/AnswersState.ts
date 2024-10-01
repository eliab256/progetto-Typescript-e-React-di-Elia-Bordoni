import { createSlice } from "@reduxjs/toolkit";

interface AnswersStateInt{
    TotalAnswersCounter: number,
    RightAnswersCounter: number,
    isAnswered: boolean,
    isAnsweredCorrect: boolean,
}
const initialState:AnswersStateInt = {
    TotalAnswersCounter: 0,
    RightAnswersCounter: 0,
    isAnswered: false,
    isAnsweredCorrect: false,
};

const AnswersStateSlice = createSlice({
    name: "AnswersState",
    initialState,
    reducers:{
        rightAnswer(state){
            state.RightAnswersCounter += 1;
            state.isAnsweredCorrect = true;
        },
        answerDone(state){
            state.TotalAnswersCounter += 1;
           
        },
        newAnswer(state){
            state.isAnswered = true;
        },
        wrongAnswerChange(state){
            state.RightAnswersCounter -= 1;
            state.isAnsweredCorrect = false;
            
        }

    }
});


export const {rightAnswer, answerDone, newAnswer, wrongAnswerChange} = AnswersStateSlice.actions;
export default AnswersStateSlice.reducer;
