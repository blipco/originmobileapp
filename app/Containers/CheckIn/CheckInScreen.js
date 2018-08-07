import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import CheckIn from './CheckIn';

export default class CheckInScreen extends React.Component {
    static navigationOptions = {
        title: 'Check In',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
              <CheckIn navigation={this.props.navigation} />
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
function mapStoreToProps(store) {
    return {
        
    };
}
