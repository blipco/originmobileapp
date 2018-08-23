import axios from 'axios';
import { Alert } from 'react-native';

export function checkIn(checkin_outInstance, displayTime) {
    return {
        type: 'CHECK_IN',
        payload: axios.get('https://origin-mobile-app.now.sh/checkin', {
            params: {
                checkin_outInstance
            }
        })
            .then((result) => {
                const answer = result.data;
                console.log('checkin answer', answer);
                if (answer === 'success') {
                    console.log(displayTime);
                    return displayTime;
                } else {
                    Alert.alert(
                    'Administrative Message',
                    'Failed to check in. Please try again.', [{
                        text: 'OK',
                        onPress: null,
                        style: 'cancel'
                    }]
                    );
                    displayTime = '';
                    return displayTime;
                }
            })
            .catch((err) => {
                console.log(err.message);
            })
    };
}

export function checkOut(checkin_outInstance, displayTime) {
    return {
        type: 'CHECK_OUT',
        payload: axios.get('https://origin-mobile-app.now.sh/checkin', {
            params: {
                checkin_outInstance
            }
        })
            .then((result) => {
                const answer = result.data;
                console.log('checkout answer', answer);
                if (answer === 'success') {
                    return displayTime;
                } else {
                    Alert.alert(
                    'Administrative Message',
                    'Failed to check out. Please try again.', [{
                        text: 'OK',
                        onPress: null,
                        style: 'cancel'
                    }]
                    );
                    displayTime = '';
                    return displayTime;
                }
            }
            )
            .catch(err => {
                console.log(err.message);
            })
    };
}

export function release(percent, activeCircle) {
    return {
        type: 'RELEASE',
        payload: { activeCircle, percent }

    };
}

export function pressIn(percent) {
    return {
        type: 'PRESS_IN',
        payload: percent
    };
}

export function enableButton(isOnSite) {
    return {
        type: 'ENABLE_BUTTON',
        payload: isOnSite
    };
}

export function updateLocation(currentLocation) {
    return {
        type: 'UPDATE_LOCATION',
        payload: currentLocation
    };
}
