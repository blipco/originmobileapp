/* eslint no-unused-vars: 0 */
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import CheckIn from './CheckIn';

export default class CheckInScreen extends React.Component {
    static navigationOptions = {
        title: 'Check In',
        headerStyle: {
            backgroundColor: 'rgb(42,51,61)'
        },
        headerTintColor: '#64ABDD',
        headerTitleStyle: {
            fontFamily: 'Mwnlo',
            fontWeight: 'bold'
        }
    };

    render() {
        return (
            <ScrollView style={styles.container}>
            <CheckIn navigation={this.props.navigation} />
            </ScrollView>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
        backgroundColor: '#ebecf0'
    }
});
