import { combineReducers } from "redux";
import adminReducer from "./admin/admin-reducer";
import { userReducer } from "./login/login-reducer";
import productsReducer from "./products/product-reducers";

const reducerProducts = combineReducers({
    allProducts: productsReducer,
    allAdmin: adminReducer,
    userReducer: userReducer
})

export default reducerProducts;