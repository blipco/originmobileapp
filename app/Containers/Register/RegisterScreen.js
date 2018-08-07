import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Register from './Register';

export default class RegisterScreen extends React.Component {
    static navigationOptions = {
        title: 'Register',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                <Register navigation={this.props.navigation}/>
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
