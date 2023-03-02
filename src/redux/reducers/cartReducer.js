const cartReducer = (state = {itemCount: 0, items: [], cartTotal: 0}, action) => {
    let stateCopy;
    switch (action.type) {
        case "addToCart":
            stateCopy = state;
            stateCopy.itemCount += action.payload.quantity;
            let indexValue = -1;
            for(let i = 0; i < stateCopy.items.length; i++) {
                if (stateCopy.items[i].item === action.payload.itemName) {
                    indexValue = i;
                    break;
                }
            }
            if (indexValue >= 0) {
                stateCopy.items[indexValue].quantity += action.payload.quantity;
            } else {
                stateCopy.items.push({"item": action.payload.itemName, 
                 "quantity": action.payload.quantity, "price": action.payload.price});
            }
            stateCopy.cartTotal += action.payload.price * action.payload.quantity;
            return stateCopy;
        case "removeFromCart":
            stateCopy = state;
            stateCopy.itemCount -= stateCopy.items[action.payload].quantity;
            stateCopy.cartTotal -= stateCopy.items[action.payload].quantity * stateCopy.items[action.payload].price;
            stateCopy.items.splice(action.payload, 1);
            return stateCopy;
        case "emptyCart":
            stateCopy = state;
            stateCopy.itemCount = 0;
            stateCopy.items = [];
            stateCopy.cartTotal = 0;
            return stateCopy;
        default:
            return state;
    }
}

export default cartReducer;