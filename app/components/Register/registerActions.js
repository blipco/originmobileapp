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

export function passwordEntry(pw) {
    return {
        type: 'PASSWORD_ENTRY',
        payload: pw
    }
}

export function password2Entry(pw2) {//will need not need
    return {
        type: 'PASSWORD2_ENTRY',
        payload: pw2
    }
}

export function deviceIDEntry(deviceId) {
    return {
        type: 'DEVICE_ID_ENTRY',
        payload: deviceId
    }
}