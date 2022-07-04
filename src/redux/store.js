import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import reducerProducts from "./reducer";

const store = createStore(
    reducerProducts,
    applyMiddleware(thunk)
)

export default store;