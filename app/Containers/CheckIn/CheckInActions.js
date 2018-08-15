import axios from 'axios';
import { Alert } from 'react-native';

export function checkIn(checkin_outInstance, displayTime) {
    return {
        type: 'CHECK_IN',
        payload: axios.get('https://18825649.ngrok.io/checkin', {
            params: {
                checkin_outInstance
            }
        })
            .then(result => {
                let answer = result.data.status;
                if (answer == 'success') {
                    return displayTime;
                } else {
                    Alert.alert(
                        'Administrative Message',
                        'Failed to check in. Please try again.', [{
                            text: 'OK',
                            onPress: null,
                            style: 'cancel'
                        }]
                    )
                    let displayTime = '';
                    return displayTime;
                }
            }
            )
            .catch(err => {
                console.log(err.message);
            })
    }
}

export function checkOut(checkin_outInstance, displayTime) {
    return {
        type: 'CHECK_OUT',
        payload: axios.get('https://18825649.ngrok.io/checkin', {
            params: {
                checkin_outInstance
            }
        })
            .then(res => {
                let answer = res.data.status;
                if (answer == 'success') {
                    return displayTime;
                } else {
                    Alert.alert(
                        'Administrative Message',
                        'Failed to check out. Please try again.', [{
                            text: 'OK',
                            onPress: null,
                            style: 'cancel'
                        }]
                    )
                    let displayTime = '';
                    return displayTime;
                }
            }
            )
            .catch(err => {
                console.log(err.message);
            })
    }
}

export function release(percent, activeCircle) {
    return {
        type: 'RELEASE',
        payload: { activeCircle, percent }

    }
}

export function pressIn(percent) {
    return {
        type: 'PRESS_IN',
        payload: percent
    }
}

export function enableButton(isOnSite) {
    return {
        type: 'ENABLE_BUTTON',
        payload: isOnSite
    }
}

export function updateLocation(currentLocation) {
    return {
        type: 'UPDATE_LOCATION',
        payload: currentLocation
    }
}
