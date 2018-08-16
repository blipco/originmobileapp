/* eslint no-unused-vars: 0 */
import React from 'react';
import { Provider } from 'react-redux';
import {
  AppLoading,
  Asset,
  Font
} from 'expo';
import { createStackNavigator } from 'react-navigation';
import store from './rootStore';
import CheckInScreen from './Containers/CheckIn/CheckInScreen';
import LoginScreen from './Containers/Login/LoginScreen';
import RegisterScreen from './Containers/Register/RegisterScreen';
import OCAvertical from './assets/images/OCAvertical.png';
import OCAverticalWhite from './assets/images/OCAvertical-white.png';
import fingerprint from './assets/images/fingerprint-outline-variant.png';
import Mwnlo from './assets/fonts/Menlo-Regular.ttf';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  _handleLoadingError = (error) => {
    console.warn(error);
  };

  _loadResourcesAsync = async() => {
    return Promise.all([
      Asset.loadAsync([OCAvertical, OCAverticalWhite, fingerprint]),
      Font.loadAsync({ Mwnlo })
    ]);
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
      });
      return (
        <Provider store={store}>
          <AppRoot />
        </Provider>
      );
    }
  }
}

