import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Login from './Login';

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Log in',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                <Login navigation={this.props.navigation} />
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
