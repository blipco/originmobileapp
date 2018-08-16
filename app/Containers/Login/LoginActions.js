/* eslint no-shadow: 0 */
import axios from 'axios';
import { Alert } from 'react-native';

export function loginEntry(loginObj, navigate) {
  let email = loginObj.email.toLowerCase();
  let password = loginObj.password;
  let deviceId = loginObj.deviceId;

  return {
    type: 'LOGIN_ENTRY',
    payload: axios.post('http://20f6ee5a.ngrok.io/api/users/login', { email, password })
      .then(response => {
        const accessToken = response.data.id;
        const studentId = response.data.userId;
          return axios.patch(`http://20f6ee5a.ngrok.io/api/users/${studentId}?access_token=${accessToken}`, { deviceId })
            .then(response => {
              if (response.status === 200) {
                navigate('Checkin')
              }
              return response.data;
            })
            .catch(err => console.log(err, 'patch error'));
      })
      .catch(err => {
        console.log(err, 'post error');
        Alert.alert(
        'Login Error',
        'Please enter a valid login.', [{
          text: 'OK',
          onPress: null,
          style: 'cancel'
        }]
      );
      return err;
    }
      )};
};

export function passwordLoginEntry(input) {
  return {
    type: 'PASSWORD_LOGIN_ENTRY',
    payload: input
  };
};

export function emailLoginEntry(input) {
  return {
    type: 'EMAIL_LOGIN_ENTRY',
    payload: input
  };
};
