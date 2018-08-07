import React from 'react';
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
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Linking,
    Alert,
    ScrollView
} from 'react-native';
import {
    FormLabel,
    FormInput,
    Button,
    FormValidationMessage,
    Icon
} from 'react-native-elements';
import { connect } from 'react-redux';


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
    }

    handleStudentIDInput(sID) {
        const { dispatch } = this.props;
        dispatch(studentIdEntry(sID));
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

    handleRegistration() {
        const { firstName, lastName, studentId, email, phone, password, password2, deviceId, dispatch } = this.props;
        console.log(firstName, lastName, studentId, email, phone, password, password2, deviceId);
        if (firstName == '' || lastName == '' || studentId == '' || email == '' || phone == '' || password == '' || password2 == '') {
            Alert.alert(
                'Form Error',
                'Complete all fields to submit', [{
                    text: 'OK',
                    onPress: null,
                    style: 'cancel'
                }]
            );
        } else {
            if (password.length < 6) {
                Alert.alert(
                    'Form Error',
                    'Password needs to be at least 6 characters', [{
                        text: 'OK',
                        onPress: null,
                        style: 'cancel'
                    }]
                )
            } else {
                if (password !== password2) {
                    Alert.alert(
                        'Form Error',
                        'Password does not match', [{
                            text: 'OK',
                            onPress: null,
                            style: 'cancel'
                        }]
                    )
                }
                else {
                    const newStudentReg = {
                        studentId,
                        firstName,
                        lastName,
                        email,
                        phoneNumber,
                        deviceId
                    }
                    dispatch(registerUser(newStudentReg));
                }
            }
        }
    }

    render() {
        return (
            <ScrollView keyboardDismissMode='on-drag'>
                <View style={styles.container}>
                    <View style={styles.formContainer}>
                        <FormLabel>Student ID</FormLabel>
                        <FormInput onChangeText={this.handleStudentIDInput} />
                        <FormLabel>First Name </FormLabel>
                        <FormInput onChangeText={this.handleFirstNameInput} />
                        <FormLabel>Last Name</FormLabel>
                        <FormInput onChangeText={this.handleLastNameInput} />
                        <FormLabel>Email</FormLabel>
                        <FormInput onChangeText={this.handleEmailInput} />
                        <FormLabel>Phone Number</FormLabel>
                        <FormInput onChangeText={this.handlePhoneInput} />
                        <FormLabel>Password</FormLabel>
                        <FormInput onChangeText={this.handlePasswordInput} />
                        <FormLabel>Confirm Password</FormLabel>
                        <FormInput onChangeText={this.handlePassword2Input} />
                    </View>
                    <Button style={styles.button}
                        onPress={this.handleRegistration}
                        backgroundColor={'#346abb'}
                        borderRadius={3}
                        medium
                        icon={{ name: 'sign-in', type: 'font-awesome' }}
                        title='Register' />
                </View>
            </ScrollView>
        )
    };
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
