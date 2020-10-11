import {createStore} from 'redux';
import StoreReducer from './../Reducers/StoreReducer'

const store = createStore(StoreReducer);
export default store;

    