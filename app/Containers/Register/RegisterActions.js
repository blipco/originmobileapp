import axios from 'axios';
import { Alert } from 'react-native';

export function firstNameEntry(fname) {
    return {
        type: 'FIRST_NAME_ENTRY',
        payload: fname
    };
}

export function lastNameEntry(lname) {
    return {
        type: 'LAST_NAME_ENTRY',
        payload: lname
    };
}

export function studentIdEntry(studentId) {
    return {
        type: 'STUDENT_ID_ENTRY',
        payload: studentId
    };
}

export function emailEntry(email) {
    return {
        type: 'EMAIL_ENTRY',
        payload: email.toLowerCase()
    };
}

export function phoneEntry(phone) {
    return {
        type: 'PHONE_ENTRY',
        payload: phone
    };
}

export function passwordEntry(password) {
    return {
        type: 'PASSWORD_ENTRY',
        payload: password
    };
}

export function password2Entry(password2) {
    return {
        type: 'PASSWORD2_ENTRY',
        payload: password2
    };
}

export function deviceIDEntry(deviceId) {
    return {
        type: 'DEVICE_ID_ENTRY',
        payload: deviceId
    };
}

export function registerUser(newUserReg, navigate) {
    newUserReg.deviceId = 'Abc123'; // temporary until getDeviceID is up and running

    return {
        type: 'USER_REGISTRATION',
        payload: axios.get('https://origin-mobile-app.now.sh/register', {    //check if user is actually a student
            params: {
                studentId: newUserReg.studentId,
                email: newUserReg.email
            }
        })
            .then(result => {
                let answer = result.data;
                if (answer) {
                    axios.post('https://origin-mobile-app.now.sh/api/users', newUserReg) // user is a student so post to DB
                        .then(response => {
                            return response.data;
                        })
                        .catch(err => {
                            console.log(err.message);
                            Alert.alert( // user is not a student
                                'Administrative Message',
                                'Email has already been registered. Please try logging in.', [{
                                    text: 'OK',
                                    onPress: null,
                                    style: 'cancel'
                                }]
                            );
                        });
                    navigate('Login');
                } else {
                    Alert.alert( // user is not a student
                        'Administrative Message',
                        'We are not accepting students at this time.', [{
                            text: 'OK',
                            onPress: null,
                            style: 'cancel'
                        }]
                    );
                }
            })
            .catch((err) => {
                result.send(err.message);
            })
    };
}
