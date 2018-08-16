/* eslint no-unused-vars: 0 */
import React from 'react';
import { ScrollView } from 'react-native';
import CheckIn from './CheckIn';
import { navigateStyle } from './CheckInStyles';

export default class CheckInScreen extends React.Component {
    static navigationOptions = navigateStyle;

    render() {
        return (
            <ScrollView keyboardDismissMode='on-drag'>
            <CheckIn navigation={this.props.navigation} />
            </ScrollView>
        );
    };
};
