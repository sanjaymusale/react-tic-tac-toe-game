import { createStore, applyMiddleware } from "redux"
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './reducer'


export const configureStore = () => {
    const createAppStore = applyMiddleware()(createStore);
    const persistConfig = { key: 'root', blacklist: [], storage };
    const persistedReducer = persistReducer(persistConfig, rootReducer)
    const store = createAppStore(persistedReducer)
    const persistor = persistStore(store);
    return { store, persistor }
} 