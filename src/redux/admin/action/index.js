import * as types from "./types"

export const addUser = (user) => {
    return {
        type: types.ADD_USER, user
    }
}
export const deleteUser = (id) => {
    return {
        type: types.DELETE_USER, id
    }
}
export const editUser = (id, user) => {
    return {
        type: types.EDIT_USER, id, user
    }
}

export const addProductAdmin = (category, product) => {
    return {
        type: types.ADD_PRODUCT_ADMIN, category, product
    }
}
export const deleteProductAdmin = (category, idDelete) => {
    return {
        type: types.DELETE_PRODUCT_ADMIN, category, idDelete
    }
}
export const editProductAdmin = (category, idEdit, infoEdit) => {
    return {
        type: types.EDIT_PRODUCT_ADMIN, category, idEdit, infoEdit
    }
}

export const deleteProductOrder = (id) => {
    return {
        type: types.DELETE_PRODUCT_ORDER, id
    }
}

export const loginStatus = () => {
    return {
        type: types.LOGIN_STATUS
    }
}