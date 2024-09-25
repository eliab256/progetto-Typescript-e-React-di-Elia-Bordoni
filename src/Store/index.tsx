import { configureStore } from "@reduxjs/toolkit"
import quizStateReducer from "./QuizState";
import AnswersReducer from "./AnswersState";

export  const store = configureStore({
    reducer:{
        quizState: quizStateReducer,
        AnswersCounter: AnswersReducer,
    },

    devTools:process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;