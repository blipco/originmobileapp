import axios from 'axios';
import { Alert } from 'react-native';

export function firstNameEntry(fname) {
    return {
        type: 'FIRST_NAME_ENTRY',
        payload: fname
    }
}

export function lastNameEntry(lname) {
    return {
        type: 'LAST_NAME_ENTRY',
        payload: lname
    }
}

export function studentIdEntry(studentId) {
    return {
        type: 'STUDENT_ID_ENTRY',
        payload: studentId
    }
}

export function emailEntry(email) {
    return {
        type: 'EMAIL_ENTRY',
        payload: email
    }
}

export function phoneEntry(phone) {
    return {
        type: 'PHONE_ENTRY',
        payload: phone
    }
}

export function passwordEntry(password) {
    return {
        type: 'PASSWORD_ENTRY',
        payload: password
    }
}

export function password2Entry(password2) {
    return {
        type: 'PASSWORD2_ENTRY',
        payload: password2
    }
}

export function deviceIDEntry(deviceId) {
    return {
        type: 'DEVICE_ID_ENTRY',
        payload: deviceId
    }
}

export function registerUser(newUserReg, navigate) {
    var answer;
    newUserReg.deviceId = 'Abc123';                      //temporary until getDeviceID is up and running
    return {
        type: 'USER_REGISTRATION',
        payload: axios.post('https://2277d70c.ngrok.io/api/users', newUserReg )
            .then(response => console.log(response.data))
            .catch(err => console.log(err))
    }
}
