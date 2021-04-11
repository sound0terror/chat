import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {connectRouter, routerMiddleware} from 'connected-react-router';
import userReducer from "./reducers/userReducer";
import messageReducer from "./reducers/messageReducer";
import thunkMiddleware from "redux-thunk";
import {loadFromLocalStorage, saveToLocalStorage} from "./LocalStorage";
import {createBrowserHistory} from "history";
import axios from '../axios-api';

export const history = createBrowserHistory();
const rootReducer = combineReducers({
    router: connectRouter(history),
    messages: messageReducer,
    users: userReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [
    thunkMiddleware,
    routerMiddleware(history)
];
const enhancers = composeEnhancers(applyMiddleware(...middleware));
const persistedState = loadFromLocalStorage();
const store = createStore(rootReducer, persistedState, enhancers);

axios.interceptors.request.use(config => {
    try {
        config.headers['Authorization'] = store.getState().users.user.token;
    } catch {
        return;
    }

    return config;
});

store.subscribe(() => {
    saveToLocalStorage({
        users: {
            user: store.getState().users.user
        }
    });
});
export default store;
