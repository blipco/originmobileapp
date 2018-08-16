/* eslint no-unused-vars: 0 */
import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Alert,
  View
} from 'react-native';
import {
  FormLabel,
  FormInput,
  Button
} from 'react-native-elements';
import Expo from 'expo';
import {
  loginEntry,
  passwordLoginEntry,
  emailLoginEntry
} from './LoginActions';
import { loginStyle } from './LoginStyles';

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.handleLoginEmailInput = this.handleLoginEmailInput.bind(this);
    this.handleLoginPasswordInput = this.handleLoginPasswordInput.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleNewUserRegistration = this.handleNewUserRegistration.bind(this);
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
    const { loginEmail, loginPassword, dispatch } = this.props;
    const { navigate } = this.props.navigation;
    const signInId = Expo.Constants.deviceId;
    if (loginEmail === ''
        || loginPassword === '') {
      Alert.alert(
        'Error',
        'Please complete all fields before submitting', [{
          text: 'OK',
          onPress: null,
          style: 'cancel'
        }]
      );
    } else {
      const loginObj = {
        email: loginEmail,
        password: loginPassword,
        deviceId: signInId
      };
      dispatch(loginEntry(loginObj, navigate));
    }
  };

  handleNewUserRegistration() {
    const { navigate } = this.props.navigation;
    navigate('Register');
  };

  render() {
    const { loginEmail, loginPassword } = this.props;
    const styles = StyleSheet.create(loginStyle);

    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <FormLabel labelStyle={styles.formLabel}>Email</FormLabel>
          <FormInput
            containerStyle={styles.inputContainer}
            defaultValue={loginEmail}
            onChangeText={this.handleLoginEmailInput}
          />
          <FormLabel labelStyle={styles.formLabel}>Password</FormLabel>
          <FormInput
            containerStyle={styles.inputContainer}
            defaultValue={loginPassword}
            onChangeText={this.handleLoginPasswordInput}
            secureTextEntry={true}
          />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 45 }}>
          <View style={{ flex: 1, marginRight: 10 }}>
            <Button
              style={styles.button}
              onPress={this.handleLoginSubmit}
              backgroundColor='rgb(100,171,221)'
              color='rgb(39,44,53)'
              borderRadius={3}
              title='Log in'
              fontFamily='Mwnlo'
            />
          </View>
          <View style={{ flex: 1 }}>
            <Button
              style={styles.button}
              onPress={this.handleNewUserRegistration}
              borderRadius={3}
              title='Register'
              backgroundColor='rgb(100,171,221)'
              color='rgb(39,44,53)'
              fontFamily='Mwnlo'
            />
          </View>
        </View>
      </View>
    );
  }
};

function mapStoreToProps(store) {
  return {
    loginEmail: store.loginData.loginEmail,
    loginPassword: store.loginData.loginPassword,
    studentId: store.loginData.studentId,
    deviceId: store.loginData.deviceId
  };
};

export default connect(mapStoreToProps)(Login);
