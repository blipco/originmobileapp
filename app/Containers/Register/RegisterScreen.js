import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Register from './Register';

export default class RegisterScreen extends React.Component {
    static navigationOptions = {
        title: 'Register',
        headerStyle: {
            backgroundColor: 'rgb(42,51,61)',
        },
        headerTintColor: '#64ABDD',
        headerTitleStyle: {
            fontFamily: 'Mwnlo',
            fontWeight: 'bold',
        },
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                <Register navigation={this.props.navigation} />
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
        backgroundColor: '#ebecf0',
    },
});
