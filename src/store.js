import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import thunk from 'redux-thunk';

const initialState = {};

const persistConfig = {
    key: 'root',
    storage,
}

const middleware = [thunk];

const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = createStore(
//     rootReducer,
//     initialState,
//     compose(
//         applyMiddleware(...middleware),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// );

// export default () => {
//     let store = createStore(
//         persistedReducer,
//         initialState,
//         compose(
//             applyMiddleware(...middleware),
//             window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//         )
//     );
//     let persistor = persistStore(store)
//     return { store, persistor }
// }

export const store = createStore(
    persistedReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
export const persistor = persistStore(store);

// export default store;
