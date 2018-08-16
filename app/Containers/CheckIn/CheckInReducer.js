const defaultState = {
    displayTime: '',
    status: 'checked out',
    percent: 0,
    activeCircle: true,
    isCheckedIn: false,
    buttonEnabled: false,
    location: null
};

export default function checkinReducer(state = defaultState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'PRESS_IN': {
            return {
                ...state,
                percent: payload
            };
        }

        case 'RELEASE': {
            return {
                ...state,
                activeCircle: payload.activeCircle,
                percent: payload.percent
            };
        }

        case 'CHECK_IN_PENDING': {
            return {
                ...state
            };
        }

        case 'CHECK_IN_FULFILLED': { // change to fulfilled once axios call is initiated
            return {
                ...state,
                status: 'checked in',
                displayTime: payload,
                isCheckedIn: true
            };
        }

        case 'CHECK_IN_REJECTED': {
            return {
                ...state,
                error: payload
            };
        }

        case 'CHECK_OUT_PENDING': {
            return {
                ...state
            };
        }

        case 'CHECK_OUT_FULFILLED': { // change to fulfilled once axios call is initiated
            return {
                ...state,
                status: 'checked out',
                displayTime: payload,
                isCheckedIn: false
            };
        }

        case 'CHECK_OUT_REJECTED': {
            return {
                ...state,
                error: payload
            };
        }

        case 'ENABLE_BUTTON': {
            return {
                ...state,
                buttonEnabled: payload
            };
        }

        case 'UPDATE_LOCATION': {
            return {
                ...state,
                location: payload
            };
        }

        default: {
            return state;
        }
    }
};
