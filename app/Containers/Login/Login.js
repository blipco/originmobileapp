import React from 'react';
import { connect } from 'react-redux';
import { Platform, 
  StyleSheet,
  Text,
  Alert,
  ScrollView, 
  View } from 'react-native'; 

import { FormLabel, FormInput, Button } from 'react-native-elements';
import { loginEntry, passwordLoginEntry, emailLoginEntry } from './LoginActions';

  class Login extends React.Component {
    constructor(props) {
      super(props);
  
      this.handleLoginEmailInput = this.handleLoginEmailInput.bind(this);
      this.handleLoginPasswordInput = this.handleLoginPasswordInput.bind(this);
      this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }
  
    static navigationOptions = {
      title: 'Log in',
    };
  
    handleLoginEmailInput(input) {
      const { dispatch } = this.props;
      dispatch(emailLoginEntry(input.toLowerCase()));
    }
  
    handleLoginPasswordInput(input) {
      const { dispatch } = this.props;
      dispatch(passwordLoginEntry(input));
    }
  
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
      }
  
      else {
        const { dispatch } = this.props;
        const { loginEmail, loginPassword, deviceId } = this.props;
        const { navigate } = this.props.navigation;
        const signInId = Expo.Constants.deviceId;

        const loginObj = {
          "email": loginEmail,
          "password": loginPassword,
          "deviceId": signInId
        }
        dispatch(loginEntry(loginObj, navigate));
      }
    }
  
    render() {
      const { studentId, loginEmail, loginPassword } = this.props;
      const { navigate } = this.props.navigation
      return (
        <ScrollView keyboardDismissMode='on-drag'>
          <View style={styles.container}>
            <View style={styles.formContainer}>
              <FormLabel>Email</FormLabel>
              <FormInput defaultValue={loginEmail} onChangeText={this.handleLoginEmailInput} />
              <FormLabel>Password</FormLabel>
              <FormInput defaultValue={loginPassword} onChangeText={this.handleLoginPasswordInput} secureTextEntry={true}/>
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
