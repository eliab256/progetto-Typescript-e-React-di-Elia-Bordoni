import {createSlice} from "@reduxjs/toolkit"


interface QuizState {
    quizIsStarted: boolean,
    quizIsEnded: boolean,
    questionNum: number,
}

const initialState: QuizState = {
    quizIsStarted: false,
    quizIsEnded: false,
    questionNum: 1,
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
        resetQuizState: () => initialState,
    

    }
});

export const {startQuiz, endQuiz, resetQuizState, nextQuestion} = quizStateSlice.actions;
export default quizStateSlice.reducer;
