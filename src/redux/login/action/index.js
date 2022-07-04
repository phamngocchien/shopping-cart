import * as types from "./types"

export const userLogin = (data) => {
    return {
        type: types.USER_LOGIN, data
    }
}
export const userLogout = () => {
    return {
        type: types.USER_LOGOUT
    }
}
export const userRegister = (data) => {
    return {
        type: types.USER_REGISTER, data
    }
}

