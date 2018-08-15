import React from 'react';
import { connect } from 'react-redux';
import {
  Platform,
  StyleSheet,
  Text,
  Alert,
  ScrollView,
  View
} from 'react-native';

import { FormLabel, FormInput, Button } from 'react-native-elements';
import { loginEntry, passwordLoginEntry, emailLoginEntry } from './LoginActions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleLoginEmailInput = this.handleLoginEmailInput.bind(this);
    this.handleLoginPasswordInput = this.handleLoginPasswordInput.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleNewUserRegistration = this.handleNewUserRegistration.bind(this);
  };

  static navigationOptions = {
    title: 'Log in',
  };

  handleLoginEmailInput(input) {
    const { dispatch } = this.props;
    dispatch(emailLoginEntry(input));
  };

  handleLoginPasswordInput(input) {
    const { dispatch } = this.props;
    dispatch(passwordLoginEntry(input));
  };

  handleLoginSubmit() {
    const { loginEmail, loginPassword } = this.props;
    if (loginEmail == '' || loginPassword == '' || !loginEmail) {

      Alert.alert(
        'Error',
        'Please complete all fields before submitting', [{
          text: 'OK',
          onPress: null,
          style: 'cancel'
        }]
      );
    } else {
      const { dispatch } = this.props;
      const { loginEmail, loginPassword, deviceId } = this.props;
      const { navigate } = this.props.navigation;
      const signInId = Expo.Constants.deviceId;

      const loginObj = {
        email: loginEmail,
        password: loginPassword,
        deviceId: signInId
      }
      dispatch(loginEntry(loginObj, navigate));
    }
  };

  handleNewUserRegistration() {
    const { navigate } = this.props.navigation;
    navigate('Register');
  };

  render() {
    const { studentId, loginEmail, loginPassword } = this.props;
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <FormLabel labelStyle={styles.formLabel}>Email</FormLabel>
          <FormInput containerStyle={styles.inputContainer} defaultValue={loginEmail} onChangeText={this.handleLoginEmailInput} />
          <FormLabel labelStyle={styles.formLabel}>Password</FormLabel>
          <FormInput containerStyle={styles.inputContainer} defaultValue={loginPassword} onChangeText={this.handleLoginPasswordInput} secureTextEntry={true} />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 45 }}>
          <View style={{ flex: 1, marginRight: 10 }} >
            <Button style={styles.button}
              onPress={this.handleLoginSubmit}
              backgroundColor={'rgb(100,171,221)'}
              color={'rgb(39,44,53)'}
              borderRadius={3}
              title='Log in'
              fontFamily='Mwnlo' />
          </View>
          <View style={{ flex: 1 }} >
            <Button style={styles.button}
              onPress={this.handleNewUserRegistration}
              borderRadius={3}
              title="Register"
              backgroundColor={'rgb(100,171,221)'}
              color={'rgb(39,44,53)'}
              fontFamily='Mwnlo' />
          </View>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebecf0',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 305
  },
  button: {
    marginTop: 50,
    marginBottom: 20,
  },
  formContainer: {
    width: 350,
    borderColor: 'transparent',
    borderBottomWidth: 0
  },
  inputContainer: {
    borderBottomWidth: Platform.OS === 'ios' ? 1 : 0,
    borderBottomColor: 'rgb(36,47,73)',
  },
  formLabel: {
    backgroundColor: '#ebecf0',
    color: '#20252C'
  }
});

function mapStoreToProps(store) {
  return {
    loginEmail: store.loginData.loginEmail,
    loginPassword: store.loginData.loginPassword,
    studentId: store.loginData.studentId,
    deviceId: store.loginData.deviceId
  }
};

export default connect(mapStoreToProps)(Login);
