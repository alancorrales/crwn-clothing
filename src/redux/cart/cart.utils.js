export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (existingCartItem) {
        // Important: return "map" to ensure
        // new object is created and re-rendering
        // is triggered
        return increaseCartItemQuantity(cartItems, cartItemToAdd);
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}

export const increaseCartItemQuantity = (cartItems, itemToIncrease) => {
    return cartItems.map(cartItem => (
        cartItem.id === itemToIncrease.id ?
            {
                ...cartItem,
                quantity: cartItem.quantity + 1
            } : {
                ...cartItem
            }

    ))
}

export const decreaseCartItemQuantity = (cartItems, itemToDecrease) => {
    const { quantity } = itemToDecrease;

    if (quantity > 1) {
        return cartItems.map(cartItem => (
            cartItem.id === itemToDecrease.id ?
                {
                    ...cartItem,
                    quantity: cartItem.quantity - 1
                } : {
                    ...cartItem
                }

        ));
    }

    return cartItems.filter(({ id }) => (
        id !== itemToDecrease.id
    ));

}