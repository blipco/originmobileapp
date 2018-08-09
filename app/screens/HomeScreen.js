import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TextInput, Alert, ScrollView } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { loginEntry, passwordLoginEntry, emailLoginEntry } from '../components/Login/loginActions';
import { createStackNavigator } from 'react-navigation';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleLoginEmailInput = this.handleLoginEmailInput.bind(this);
    this.handleLoginPasswordInput = this.handleLoginPasswordInput.bind(this);
  }

  static navigationOptions = {
    title: 'Log in',
  };

  handleLoginEmailInput(input) {
    console.log('email input', input)
    const { dispatch } = this.props;
    dispatch(emailLoginEntry(input));
  }

  static navigationOptions = {
    title: 'Log in',
  };

  handleLoginPasswordInput(input) {
    const { dispatch } = this.props;
    dispatch(passwordLoginEntry(input));
  }

  handleLoginSubmit() {
    const { loginEmail, loginPassword } = this.props;
    if (!loginEmail || !loginPassword) {
      console.log(loginEmail, loginPassword)
      Alert.alert(
        'Error',
        'Please complete all fields', [{
          text: 'OK',
          onPress: null,
          style: 'cancel'
        }]
      );
    }

    else {
      console.log('else statement for log in submit button')
      const { dispatch } = this.props;
      const { loginEmail, loginPassword, deviceId } = this.props;
      const { navigate } = this.props.navigation;

      const loginObj = {
        "email": loginEmail,
        "password": loginPassword,
        "deviceId": deviceId
      }
      dispatch(loginEntry(loginObj, navigate));
    }
  }



  render() {
    const { studentId, loginEmail, loginPassword } = this.props;
    const { navigate } = this.props.navigation;
    return (
      <ScrollView keyboardDismissMode='on-drag'>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <FormLabel>Email</FormLabel>
            <FormInput defaultValue={loginEmail} onChangeText={this.handleEmailInput} />
            <FormLabel>Password</FormLabel>
            <FormInput defaultValue={loginPassword} onChangeText={this.handlePasswordInput} secureTextEntry={true}/>
            <FormLabel>Student ID</FormLabel>
            <FormInput defaultValue={studentId} onChangeText={this.handleStudentIdInput} />
          </View>
          <Button style={styles.button}
            onPress={this.handleLoginSubmit}
            backgroundColor={'#346abb'}
            borderRadius={3}
            title='Log in' />
            <Text> New? Click here to register
              </Text>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 300
  },
  button: {
    marginTop: 50,
    marginBottom: 20,
    width: 320
  },
  formContainer: {
    width: 350
  }
});

function mapStoreToProps(store) {
  return {
    loginEmail: store.loginData.loginEmail,
    loginPassword: store.loginData.loginPassword,
    studentId: store.loginData.studentId,
    deviceId: store.loginData.deviceId
  }
}

export default connect(mapStoreToProps)(Login)
