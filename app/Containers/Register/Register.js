/* eslint no-unused-vars: 0 */
import React from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Alert
} from 'react-native';
import {
    FormLabel,
    FormInput,
    Button
} from 'react-native-elements';
import { connect } from 'react-redux';
import {
    firstNameEntry,
    lastNameEntry,
    studentIdEntry,
    emailEntry,
    phoneEntry,
    passwordEntry,
    password2Entry,
    registerUser
} from './RegisterActions';
import { registerStyle } from './RegisterStyle';

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.handleFirstNameInput = this.handleFirstNameInput.bind(this);
        this.handleLastNameInput = this.handleLastNameInput.bind(this);
        this.handleStudentIDInput = this.handleStudentIDInput.bind(this);
        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.handlePhoneInput = this.handlePhoneInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
        this.handlePassword2Input = this.handlePassword2Input.bind(this);
        this.handleRegistration = this.handleRegistration.bind(this);
        this.sayHello = this.sayHello.bind(this);
    }

    handleStudentIDInput(studentId) {
        const { dispatch } = this.props;
        dispatch(studentIdEntry(studentId));
    }

    handleFirstNameInput(fname) {
        const { dispatch } = this.props;
        dispatch(firstNameEntry(fname));
    }

    handleLastNameInput(lname) {
        const { dispatch } = this.props;
        dispatch(lastNameEntry(lname));
    }

    handleEmailInput(email) {
        const { dispatch } = this.props;
        dispatch(emailEntry(email));
    }

    handlePhoneInput(phone) {
        const { dispatch } = this.props;
        dispatch(phoneEntry(phone));
    }

    handlePasswordInput(password) {
        const { dispatch } = this.props;
        dispatch(passwordEntry(password));
    }

    handlePassword2Input(password2) {
        const { dispatch } = this.props;
        dispatch(password2Entry(password2));
    }

    sayHello() {
        return Alert.alert(
            'Hello',
            '🍌baNaNa', [{
                text: 'OK',
                onPress: null,
                style: 'cancel'
            }]
        );
    }

    handleRegistration() {
        const {
            firstName,
            lastName,
            studentId,
            email,
            phone,
            password,
            password2,
            deviceId,
            dispatch
        } = this.props;
        const { navigate } = this.props.navigation;
        const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (firstName === ''
            || lastName === ''
            || studentId === ''
            || email === ''
            || phone === ''
            || password === ''
            || password2 === '') {
            Alert.alert(
                'Field Error',
                'Complete all fields to submit', [{
                    text: 'OK',
                    onPress: null,
                    style: 'cancel'
                }]
            );
        } else {
            if (password.length < 6) {
                Alert.alert(
                    'Password Error',
                    'Password needs to be at least 6 characters', [{
                        text: 'OK',
                        onPress: null,
                        style: 'cancel'
                    }]
                );
            } else {
                if (password !== password2) {
                    Alert.alert(
                        'Password Error',
                        'Password does not match', [{
                            text: 'OK',
                            onPress: null,
                            style: 'cancel'
                        }]
                    );
                } else {
                    if (reg.test(email) === false) {
                        Alert.alert(
                            'Email Error',
                            'Email is not complete', [{
                                text: 'OK',
                                onPress: null,
                                style: 'cancel'
                            }]
                        );
                    } else {
                        const newStudentReg = {
                            studentId,
                            firstName,
                            lastName,
                            email,
                            phone,
                            password,
                            deviceId

                        };
                        dispatch(registerUser(newStudentReg, navigate));
                        navigate('Login');
                    }
                }
            }
        }
    }

    render() {
        const styles = StyleSheet.create(registerStyle);
        return (
                <View style={styles.container}>
                    <View style={styles.formContainer}>
                        <FormLabel labelStyle={styles.formLabel}>Student ID</FormLabel>
                        <FormInput
                            autoCorrect={false}
                            keyboardType='numeric'
                            containerStyle={styles.inputContainer}
                            onChangeText={this.handleStudentIDInput}
                        />
                        <FormLabel labelStyle={styles.formLabel}>First Name </FormLabel>
                        <FormInput
                            autoCorrect={false}
                            containerStyle={styles.inputContainer}
                            onChangeText={this.handleFirstNameInput}
                        />
                        <FormLabel labelStyle={styles.formLabel}>Last Name</FormLabel>
                        <FormInput
                            autoCorrect={false}
                            containerStyle={styles.inputContainer}
                            onChangeText={this.handleLastNameInput}
                        />
                        <FormLabel labelStyle={styles.formLabel}>Email</FormLabel>
                        <FormInput
                            autoCorrect={false}
                            keyboardType='email-address'
                            containerStyle={styles.inputContainer}
                            onChangeText={this.handleEmailInput}
                        />
                        <FormLabel labelStyle={styles.formLabel}>Phone Number</FormLabel>
                        <FormInput
                            autoCorrect={false}
                            keyboardType='numeric'
                            containerStyle={styles.inputContainer}
                            onChangeText={this.handlePhoneInput}
                        />
                        <FormLabel labelStyle={styles.formLabel}>Password</FormLabel>
                        <FormInput
                            autoCorrect={false}
                            textContentType='password'
                            secureTextEntry={true}
                            containerStyle={styles.inputContainer}
                            onChangeText={this.handlePasswordInput}
                        />
                        <FormLabel labelStyle={styles.formLabel}>Confirm Password</FormLabel>
                        <FormInput
                            autoCorrect={false}
                            textContentType='password'
                            secureTextEntry={true}
                            containerStyle={styles.inputContainer}
                            onChangeText={this.handlePassword2Input}
                        />
                    </View>
                    <Button
                        style={styles.button}
                        onPress={this.handleRegistration}
                        backgroundColor='rgb(100,171,221)'
                        borderRadius={4}
                        color='rgb(39,44,53)'
                        medium
                        icon={{
                            name: 'sign-in',
                            type: 'font-awesome',
                            color: 'rgb(39,44,53)'
                        }}
                        title='Register'
                        fontFamily='Mwnlo'
                    />
                    <Button
                        style={styles.button}
                        onPress={this.sayHello}
                        backgroundColor='transparent'
                        borderRadius={4}
                    />
                </View>
        );
    }
}

function mapStoreToProps(store) {
    return {
        firstName: store.registerData.firstName,
        lastName: store.registerData.lastName,
        studentId: store.registerData.studentId,
        email: store.registerData.email,
        phone: store.registerData.phone,
        password: store.registerData.password,
        password2: store.registerData.password2,
        deviceId: store.registerData.deviceId
    };
}

export default connect(mapStoreToProps)(Register);
