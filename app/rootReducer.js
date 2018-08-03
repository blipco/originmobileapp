import { combineReducers } from redux;
import register from './components/Register/registerReducer';

const rootReducer = combineReducers({
    registerData: registerReducer
});

export default rootReducer;