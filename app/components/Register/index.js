import { connect } from 'react-redux';
import Register from './Register';

function mapStoreToProps(store) {
    return {
        first_name: store.registerData.first_name,
        last_name: store.registerData.last_name,
        email: store.registerData.email,
        phone: store.registerData.phone,
        password: store.registerData.password,
        password2: store.registerData.password2
    };
}

export default connect(mapStoreToProps)(Register);