import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './redux/reducers/reducer';

const initialState = {};
const middleware = [thunk];
const store = createStore(rootReducer,applyMiddleware(...middleware));

export default store