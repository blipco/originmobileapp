const defaultState = {
    firstName: '',
    lastName: '',
    studentId: '',
    email: '',
    phone: '',
    password: '',
    password2: '',
    deviceId: ''
}

export default function registerReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {

        case 'FIRST_NAME_ENTRY': {
            return {
                ...state,
                firstName: payload
            }
        }
        case 'LAST_NAME_ENTRY': {
            return {
                ...state,
                lastName: payload
            }
        }
        case 'STUDENT_ID_ENTRY': {
            return {
                ...state,
                studentId: payload
            }
        }
        case 'EMAIL_ENTRY': {
            return {
                ...state,
                email: payload
            }
        }
        case 'PHONE_ENTRY': {
            return {
                ...state,
                phone: payload
            }
        }
        case 'PASSWORD_ENTRY': {
            return {
                ...state,
                password: payload
            }
        }
        case 'PASSWORD2_ENTRY': {
            return {
                ...state,
                password2: payload
            }
        }
        case 'DEVICE_ID_ENTRY': {
            return {
                ...state,
                deviceId: payload
            }
        }
        case 'USER_REGISTRATION': {
            return {
                ...state,
                user: payload
            }
        }
        default: {
            return state;
        }
    }
}