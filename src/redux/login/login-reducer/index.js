import * as types from "../action/types"
import firebase from "firebase"

const initialState = {
    userLogin: []
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.USER_LOGIN:
            return { ...state, userLogin: action.data }
        case types.USER_LOGOUT:
            return { ...state, userLogin: [] }
        case types.USER_REGISTER:
            firebase.database().ref('admin').push(action.data)
            return state
        default:
            return state
    }
}
