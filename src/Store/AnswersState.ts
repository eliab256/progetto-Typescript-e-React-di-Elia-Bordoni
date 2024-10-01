import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AnswersStateInt{
    TotalAnswersCounter: number,
    RightAnswersCounter: number,
    isAnswered: boolean,
    isAnsweredCorrect: boolean,
    selectedAnswerIndex: number | null,
}
const initialState:AnswersStateInt = {
    TotalAnswersCounter: 0,
    RightAnswersCounter: 0,
    isAnswered: false,
    isAnsweredCorrect: false,
    selectedAnswerIndex: null,
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
            
        },
        setSelectedAnswer(state, action: PayloadAction<number | null>) {
            state.selectedAnswerIndex = action.payload;
        },
        resetAnswersState: () => initialState,

    }
});


export const {rightAnswer, answerDone, newAnswer, wrongAnswerChange, setSelectedAnswer, resetAnswersState} = AnswersStateSlice.actions;
export default AnswersStateSlice.reducer;
