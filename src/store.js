import {combineReducers, createStore} from "redux";

//Reducer imports

import todoReducer from "./reducers/todoReducers";

const reducers = combineReducers({todo : todoReducer});
const store = createStore(reducers);

export default store;