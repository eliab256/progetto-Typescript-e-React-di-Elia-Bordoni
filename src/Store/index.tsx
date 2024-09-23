import { configureStore } from "@reduxjs/toolkit"
import quizStateReducer from "./QuizState";

export  const store = configureStore({
    reducer:{
        quizState: quizStateReducer,
    },

    devTools:process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;