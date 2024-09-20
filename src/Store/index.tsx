import { configureStore } from "@reduxjs/toolkit"

interface AppState{
    
}


export  const store = configureStore({
    reducer:{

    },

    devTools:process.env.NODE_ENV !== "production",
});