const defaultState = {
    displayDate: '',
    status: 'checked out',
    percent: 0,
    activeCircle: true,
    isCheckedIn: false
}

export default function checkinReducer(state = defaultState, action) {
    const { type, payload, displayDate } = action;

    switch (type) {

        case 'PRESS_IN': {
            return {
                ...state,
                percent: payload
            }
        }

        case 'RELEASE': {
            return {
                ...state,
                activeCircle: payload.activeCircle,
                percent: payload.percent
            }
        }

        case 'CHECK_IN_PENDING': {
            return {
                ...state
            }
        }

        case 'CHECK_IN': {                          //change to fulfilled once axios call is initiated
            return {
                ...state,
                status: 'checked in',
                displayDate: displayDate,
                isCheckedIn: true
            }
        }

        case 'CHECK_IN_REJECTED': {
            return {
                ...state,
                errror: payload
            }
        }

        default: {
            return state;
        }
    }
};
