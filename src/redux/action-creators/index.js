export const addCart = (item) => {
    return (dispatch) => {
        dispatch({
            type: "addToCart",
            payload: item
        })
    }
}

export const removeFromCart = (index) => {
    return (dispatch) => {
        dispatch({
            type: "removeFromCart",
            payload: index
        })
    }
}

export const emptyCart = () => {
    return (dispatch) => {
        dispatch({
            type: "emptyCart",
            payload: ""
        })
    }
}