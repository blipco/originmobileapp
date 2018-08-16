/* eslint no-unused-vars: 0 */
import React from 'react';
import { ScrollView } from 'react-native';
import Login from './Login';
import { navigateStyle } from './LoginStyles'

export default class LoginScreen extends React.Component {
    static navigationOptions = navigateStyle;

    render() {
        return (
            <ScrollView keyboardDismissMode='on-drag'>
                <Login navigation={this.props.navigation} />
            </ScrollView>
        );
    }
}
