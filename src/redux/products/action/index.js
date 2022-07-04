import * as types from "./types"

export const changeStatusShowCart = () => {
    return {
        type: types.CHANGE_STATUS_SHOW_CART
    }
}
export const changeStatusShowInfoProduct = () => {
    return {
        type: types.CHANGE_STATUS_SHOW_INFO_PRODUCT
    }
}

export const showPageHome = () => {
    return {
        type: types.SHOW_TOP_RATING
    }
}

export const getIdFood = (id) => {
    return {
        type: types.GET_ID_FOOD, id
    }
}
export const getIdDrink = (id) => {
    return {
        type: types.GET_ID_DRINK, id
    }
}


export const quantityOrder = () => {
    return {
        type: types.GET_QUANTITY_ORDER
    }
}


export const getKeySearch = (key) => {
    return {
        type: types.GET_KEY_SEARCH, key
    }
}
export const addProduct = (product, valueInputNote, valueInputQuantity) => {
    return {
        type: types.ADD_PRODUCT, product, valueInputNote, valueInputQuantity
    }
}

export const deleteProduct = (id, dataLocal) => {
    return {
        type: types.DELETE_PRODUCT, id, dataLocal
    }
}

export const addProductOrderFirebase = (order) => {
    return {
        type: types.ADD_PRODUCT_ORDER_FIREBASE, order
    }
}