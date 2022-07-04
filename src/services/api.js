import firebase from './firebase'

export const getFoods = () => {
    let list = [];
    firebase.database().ref('products/' + "foods").on('value', (snapshot) => {
        snapshot.forEach((snap) => {
            const id = snap.key
            const name = snap.val().name
            const description = snap.val().description
            const price = snap.val().price
            const rate = snap.val().rate
            const image = snap.val().image
            const notes = snap.val().notes
            const quantity = snap.val().quantity
            list.push({
                id: id,
                name: name,
                description: description,
                price: price,
                rate: rate,
                image: image,
                notes: notes,
                quantity: quantity
            })
        })
    })
    return list;
}
export const getDrinks = () => {
    let list = [];
    firebase.database().ref('products/' + "drinks").on('value', (snapshot) => {
        snapshot.forEach((snap) => {
            const id = snap.key
            const name = snap.val().name
            const description = snap.val().description
            const price = snap.val().price
            const rate = snap.val().rate
            const image = snap.val().image
            const notes = snap.val().notes
            const quantity = snap.val().quantity
            list.push({
                id: id,
                name: name,
                description: description,
                price: price,
                rate: rate,
                image: image,
                notes: notes,
                quantity: quantity
            })
        })
    })
    return list;
}
export const getUsers = () => {
    let list = [];
    firebase.database().ref('users/').on('value', (snapshot) => {
        snapshot.forEach((snap) => {
            const id = snap.key
            const name = snap.val().name
            const password = snap.val().description
            const username = snap.val().price

            list.push({
                id: id,
                name: name,
                password: password,
                username: username,

            })
        })
    })
    return list;
}
export const getUser = firebase.database().ref('users');
export const getAdmin = firebase.database().ref('admin');
export const getFood = firebase.database().ref('products/' + "foods");
export const getDrink = firebase.database().ref('products/' + "drinks");
export const getOrder = firebase.database().ref('products/' + "order");
