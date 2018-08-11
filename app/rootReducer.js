import { combineReducers } from 'redux';
import registerReducer from './Containers/Register/RegisterReducer';
import loginReducer from './Containers/Login/LoginReducer';
import checkinReducer from './Containers/CheckIn/CheckInReducer'

const rootReducer = combineReducers({
    registerData: registerReducer,
    loginData: loginReducer,
    checkinData: checkinReducer
});

export default rootReducer;
