import React from 'react';
import { StyleSheet, Text, View, TextInput, Linking, Alert, ScrollView } from 'react-native';
import { FormLabel, FormInput, Button, FormValidationMessage, Icon } from 'react-native-elements';

export default class Register extends React.Component {

    render() {
        return (
            <ScrollView keyboardDismissMode='on-drag'>
                <View style={styles.container}>
                    <View style={styles.formContainer}>
                        <FormLabel>First Name </FormLabel>
                        <FormInput />
                        <FormLabel>Last Name</FormLabel>
                        <FormInput />
                        <FormLabel>Email</FormLabel>
                        <FormInput />
                        <FormLabel>Phone Number</FormLabel>
                        <FormInput />
                        <FormLabel>Password</FormLabel>
                        <FormInput />
                        <FormLabel>Re-Type Password</FormLabel>
                        <FormInput />
                    </View>
                    <View>
                    </View>
                    <Button style={styles.button}
                        backgroundColor={'#346abb'}
                        borderRadius={3}
                        medium
                        icon={{ name: 'sign-in', type: 'font-awesome' }}
                        title='REGISTER' />
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
        marginTop: 55,
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
