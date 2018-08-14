import axios from 'axios';

export function checkIn(checkinInstance, displayDate) {
    return {
        type: 'CHECK_IN',
        payload: checkinInstance,
        displayDate: displayDate
    }
}

export function release(percent, activeCircle) {
    return {
        type: 'RELEASE',
        payload: {activeCircle, percent}

    }
}

export function pressIn(percent) {
    return {
        type: 'PRESS_IN',
        payload: percent
    }
}
