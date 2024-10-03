import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AnswersStateInt {
    RightAnswersCounter: number;
    isAnswered: boolean;
    isAnsweredCorrect: boolean;
    selectedAnswerIndex: number | null;
}
const initialState: AnswersStateInt = {
    RightAnswersCounter: 0,
    isAnswered: false,
    isAnsweredCorrect: false,
    selectedAnswerIndex: null,
};

const AnswersStateSlice = createSlice({
    name: 'AnswersState',
    initialState,
    reducers: {
        rightAnswer(state) {
            state.RightAnswersCounter += 1;
            state.isAnsweredCorrect = true;
        },
        newAnswer(state) {
            state.isAnswered = true;
        },
        wrongAnswerChange(state) {
            state.RightAnswersCounter -= 1;
            state.isAnsweredCorrect = false;
        },
        nextQuestion(state) {
            state.isAnswered = false;
        },
        setSelectedAnswer(state, action: PayloadAction<number | null>) {
            state.selectedAnswerIndex = action.payload;
        },
        resetAnswersState: () => initialState,
    },
});

export const { rightAnswer, newAnswer, wrongAnswerChange, nextQuestion, setSelectedAnswer, resetAnswersState } =
    AnswersStateSlice.actions;
export default AnswersStateSlice.reducer;
