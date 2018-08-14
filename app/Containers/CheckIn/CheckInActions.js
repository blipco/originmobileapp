import axios from 'axios';

export function checkIn(checkinInstance, displayDate) {
    return {
        type: 'CHECK_IN',
        payload: checkinInstance,
        displayDate: displayDate
    }
};
