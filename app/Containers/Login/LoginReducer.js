const defaultState = {
    loginEmail: '',
    loginPassword: '',
    studentId: '',
    deviceId: []
  }
  
  export default function loginReducer(state = defaultState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case 'EMAIL_LOGIN_ENTRY': {
        return {
          ...state,
          loginEmail: payload
        }
      }
  
      case 'PASSWORD_LOGIN_ENTRY': {
        return {
          ...state,
          loginPassword: payload
        }
      }
  
      case 'LOGIN_ENTRY_FULFILLED': {
        let deviceId = [...state.deviceId, payload];
        return {
          ...state,
          user: payload,
          deviceId: payload.deviceId
        }
      }
  
      default: {
        return state;
      }
  
    }
  }
