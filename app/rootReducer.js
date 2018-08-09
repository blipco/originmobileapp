import { combineReducers } from 'redux';
import registerReducer from './Containers/Register/RegisterReducer';
import loginReducer from './Containers/Login/LoginReducer';

const rootReducer = combineReducers({
    registerData: registerReducer,
    loginData: loginReducer
});

export default rootReducer;
