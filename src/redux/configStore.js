import { combineReducers, createStore } from 'redux';
import giohangReducer from './reducers/giohangReducer';


const rootReducer = combineReducers({
    // khai báo tại đây
    gioHangReducer: giohangReducer
})

const store = createStore(rootReducer);

export default store;