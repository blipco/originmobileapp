import axios from 'axios';

export function checkIn(checkin_outInstance, displayTime) {
    return {
        type: 'CHECK_IN',
        payload: axios.get('https://1ed7d901.ngrok.io/checkin', {
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
                        'Failed to check in.', [{
                            text: 'OK',
                            onPress: null,
                            style: 'cancel'
                        }]
                    )
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
        payload: axios.get('https://1ed7d901.ngrok.io/checkin', {
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
                        'Failed to check in.', [{
                            text: 'OK',
                            onPress: null,
                            style: 'cancel'
                        }]
                    )
                }
            }
            )
            .catch(err => {
                res.send(err.message);
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
