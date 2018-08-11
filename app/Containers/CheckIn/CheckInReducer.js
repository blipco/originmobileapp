const defaultState = {
    displayDate: '',
    status: 'checked out'
}

export default function checkinReducer(state = defaultState, action) {
    const { type, payload, displayDate } = action;

    switch (type) {

        case 'CHECK_IN_PENDING': {
            return {
                ...state
            }
        }

        case 'CHECK_IN': {                          //change to fulfilled once axios call is initiated
            return {
                ...state,
                status: 'checked in',
                displayDate: displayDate
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
}