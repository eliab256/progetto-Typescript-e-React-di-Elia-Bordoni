import { configureStore } from "@reduxjs/toolkit"
import quizStateReducer from "./QuizState";
import DisplayErrorReducer from "./ErrorsState"
import AnswersStateReducer from "./AnswersState";

export  const store = configureStore({
    reducer:{
        quizState: quizStateReducer,
        AnswersState: AnswersStateReducer,
        DisplayError: DisplayErrorReducer,
    },

    devTools:process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;