import { connect } from 'react-redux';
import Register from './Register';

function mapStoreToProps(store) {
    return {
        firstName: store.registerData.firstName,
        lastName: store.registerData.lastName,
        studentId: store.registerData.studentId,
        email: store.registerData.email,
        phone: store.registerData.phone,
        password: store.registerData.password,
        password2: store.registerData.password2,
        deviceId: store.registerData.deviceId
    };
}

export default connect(mapStoreToProps)(Register);