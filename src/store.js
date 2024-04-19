import { configureStore } from '@reduxjs/toolkit';

//Reducer imports

import todoReducer from "./reducers/todoReducers";

const store = configureStore({
    reducer : {
        todo : todoReducer
    },

    devTools : process.env.NODE_ENV !== 'production',
})

export default store;