import React from 'react';
import { Provider } from 'react-redux';
import store from './rootStore';
import { Platform, 
         StatusBar, 
         StyleSheet, 
         View } from 'react-native';
import { AppLoading, 
         Asset, 
         Font, 
         Icon } from 'expo';
import { createStackNavigator } from 'react-navigation';
import  CheckInScreen  from './Containers/CheckIn/CheckInScreen';
import  LoginScreen  from './Containers/Login/LoginScreen';
import  RegisterScreen  from './Containers/Register/RegisterScreen';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      const AppRoot = createStackNavigator({
        Login: { screen: LoginScreen },
        Checkin: { screen: CheckInScreen },
        Register: { screen: RegisterScreen }
      })
      return (
        <Provider store={store}>
          <AppRoot />
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/OCAvertical.png'),
        require('./assets/images/OCAvertical-white.png'),
        require('./assets/images/fingerprint-outline-variant.png')

      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        'Mwnlo': require('./assets/fonts/Menlo-Regular.ttf')
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
