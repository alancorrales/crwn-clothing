import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage"; // localStorage

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'

const persistConfig = {
    key: 'root', // From what point of the reducer do we want to start storing?
    storage,
    whitelist: [
        'cart'
    ] // What do we want to persist? Only cart, bc user's already being persisted by firebase
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);