import { combineReducers } from 'redux';
import RegisterReducer from './components/Register/registerReducer';

const rootReducer = combineReducers({
    registerData: RegisterReducer
});

export default rootReducer;