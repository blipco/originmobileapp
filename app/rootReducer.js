import { combineReducers } from 'redux';
import RegisterReducer from './Containers/Register/RegisterReducer';

const rootReducer = combineReducers({
    registerData: RegisterReducer
});

export default rootReducer;