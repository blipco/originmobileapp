import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Register from '../components/Register';

export default class RegisterScreen extends React.Component {
    static navigationOptions = {
        title: 'Register',
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <Register />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
