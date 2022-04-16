import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { configureStore } from '@reduxjs/toolkit';
import reducres from "./reducers/combinedReducers";

const store = createStore(reducres, {} , applyMiddleware(thunk))

// const store = configureStore({
//   reducres
// })

export default store;