import axios from 'axios';

export function loginEntry(loginObj, navigate) {
    let email = loginObj.email;
    let password = loginObj.password;
    let deviceId = loginObj.deviceId;

    return {
      type: 'LOGIN_ENTRY',
      payload: axios.post('https://6e4cf843.ngrok.io/api/users/login', { email, password })
              .then ( response => {
              const accessToken = response.data.id;
              const studentId = response.data.userId;
                
            return axios.patch(`https://6e4cf843.ngrok.io/api/users/${studentId}?access_token=${accessToken}`, { deviceId })
              .then(response => {
                if (response.status === 200) navigate('Checkin');
                return response.data;
              })
              .catch(err => console.error(err));
            })
          .catch(err => console.error(err))
          
    }
  }
  
  export function passwordLoginEntry(input) {
    return {
      type: 'PASSWORD_LOGIN_ENTRY',
      payload: input
    }
  }
  
  export function emailLoginEntry(input) {
    return {
      type: 'EMAIL_LOGIN_ENTRY',
      payload: input
    }
  }
