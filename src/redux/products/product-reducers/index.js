import * as types from "../action/types"
import firebase from 'firebase'
//import { toast } from "react-toastify"

const initialStateProducts = {
    isStatusShowCart: false,
    isStatusShowInfoProduct: false,
    idFood: "",
    idDrink: "",
    keySearch: "",
    orderProduct: [],
    quantityOrder: ""
}

const productsReducer = (state = initialStateProducts, action) => {
    switch (action.type) {
        case types.CHANGE_STATUS_SHOW_CART:
            return { ...state, isStatusShowCart: !state.isStatusShowCart }
        case types.CHANGE_STATUS_SHOW_INFO_PRODUCT:
            return { ...state, isStatusShowInfoProduct: !state.isStatusShowInfoProduct }
        case types.GET_ID_FOOD:
            return { ...state, idFood: action.id }
        case types.GET_ID_DRINK:
            return { ...state, idDrink: action.id }
        case types.GET_KEY_SEARCH:
            return { ...state, keySearch: action.key }

        case types.ADD_PRODUCT:
            if (localStorage.getItem("order") === null) {
                action.product.quantity = action.valueInputQuantity
                action.product.notes = action.valueInputNote;
                state.orderProduct = [action.product];
                localStorage.setItem("order", JSON.stringify(state.orderProduct))
            } else {
                const getItemFromLocal = JSON.parse(localStorage.getItem('order'))
                action.product.quantity = action.valueInputQuantity
                action.product.notes = action.valueInputNote;
                state.orderProduct = [...getItemFromLocal, action.product];
                localStorage.setItem("order", JSON.stringify(state.orderProduct))
            }
            return state
        case types.GET_QUANTITY_ORDER: {
            const getOrder = JSON.parse(localStorage.getItem("order"))
            return { ...state, quantityOrder: getOrder.length }
        }
        case types.DELETE_PRODUCT: {
            const filterItem = action.dataLocal.filter(item => item.id !== action.id)
            localStorage.setItem("order", JSON.stringify(filterItem))
            return state
        }
        case types.ADD_PRODUCT_ORDER_FIREBASE: {
            firebase.database().ref('products/order').push(action.order)
            return state
        }
        default:
            return state
    }
}
export default productsReducer;
