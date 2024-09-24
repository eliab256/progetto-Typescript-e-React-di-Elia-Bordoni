import {createSlice} from "@reduxjs/toolkit"

interface QuizState {
    quizIsStarted: boolean,
    quizIsEnded: boolean,
    questionNum: number,
}

const initialState: QuizState = {
    quizIsStarted: false,
    quizIsEnded: false,
    questionNum: 0,
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
        },

        nextQuestion(state){
            state.questionNum += 1
        },
        prevQuestion(state){
            if(state.questionNum >= 1){
                state.questionNum -= 1
            }
        }

    }
});

export const {startQuiz, endQuiz, nextQuestion, prevQuestion} = quizStateSlice.actions;
export default quizStateSlice.reducer;
