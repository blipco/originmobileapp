const defaultState = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
    password2: ''
}

export default function registerReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {

        case 'FIRST_NAME_ENTRY': {
            return {
                ...state,
                first_name: payload
            }
        }
        case 'LAST_NAME_ENTRY': {
            return {
                ...state,
                last_name: payload
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
        default: {
            return state;
        }
    }
}