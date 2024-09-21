import {createSlice} from "@reduxjs/toolkit"

interface QuizState {
    quizIsStarted: boolean,
    quizIsEnded: boolean,
}

const initialState: QuizState = {
    quizIsStarted: false,
    quizIsEnded: false,
};

const quizStateSlice = createSlice({
    name: "quizState",
    initialState,
    reducers:{
        startQuiz(state){
            state.quizIsStarted = true;
        },
        endQuiz(state){
            state.quizIsEnded = true;
        }
    }
});

export const {startQuiz, endQuiz} = quizStateSlice.actions;
export default quizStateSlice.reducer;
