/* eslint no-unused-vars: 0 */
import React from 'react';
import { ScrollView } from 'react-native';
import Register from './Register';
import { navigateStyle } from './RegisterStyle';

export default class RegisterScreen extends React.Component {
    static navigationOptions = navigateStyle;

    render() {
        return (
            <ScrollView keyboardDismissMode='on-drag'>
                <Register navigation={this.props.navigation} />
            </ScrollView>
        );
    }
}
