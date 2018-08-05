import React from 'react';
import { connect } from 'react-redux';
import { firstNameEntry, lastNameEntry, emailEntry, phoneEntry, passwordEntry, password2Entry } from './registerActions';
import { StyleSheet, Text, View, TextInput, Linking, Alert, ScrollView } from 'react-native';
import { FormLabel, FormInput, Button, FormValidationMessage, Icon } from 'react-native-elements';

export default class Register extends React.Component {
    constructor(props) {
        super(props);

        this.handleFirstNameInput = this.handleFirstNameInput.bind(this);
        this.handleLastNameInput = this.handleLastNameInput.bind(this);
        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.handlePhoneInput = this.handlePhoneInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
        this.handlePassword2Input = this.handlePassword2Input.bind(this);
        this.handleRegistration = this.handleRegistration.bind(this);
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

    handlePasswordInput(pw) {
        const { dispatch } = this.props;
        dispatch(passwordEntry(pw));
    }

    handlePassword2Input(pw2) {
        const { dispatch } = this.props;
        dispatch(password2Entry(pw2));
    }

    handleRegistration() {
        const { first_name, last_name, email, phone, password, password2 } = this.props;
        console.log(first_name, last_name, email, phone, password, password2);
        //const { navigate } = this.props.navigation;

        if (first_name == '' || last_name == '' || email == '' || phone == '' || password == '' || password2 == '') {
            Alert.alert(
                'Form Error',
                'Complete all fields to submit', [{
                    text: 'OK',
                    onPress: null,
                    style: 'cancel'
                }]
            )
        } //else {
        //     const signUpObj = {
        //         "first_name": first_name,
        //         "last_name": last_name,
        //         "email": email,
        //         "password": password,
        //     }
        //     dispatch(signUpEntry(signUpObj, navigate));
        // }
    }


    render() {
        return (
            <ScrollView keyboardDismissMode='on-drag'>
                <View style={styles.container}>
                    <View style={styles.formContainer}>
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
                        <FormLabel>Re-Type Password</FormLabel>
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
    socialButtonsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        width: 350,
        paddingTop: 8,
        paddingHorizontal: 25
    },
    formContainer: {
        width: 350
    },
    switchToLogin: {
    }
});
