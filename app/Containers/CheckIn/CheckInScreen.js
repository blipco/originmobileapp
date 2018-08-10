import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import CheckIn from './CheckIn';

export default class CheckInScreen extends React.Component {
    static navigationOptions = {
        title: 'Check In',
    };

    render() {
        return (
              <CheckIn navigation={this.props.navigation} />
        );
    }
}