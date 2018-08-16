/* eslint no-unused-vars: 0 */
import React from 'react';
import moment from 'moment';
import ProgressCircle from 'react-native-progress-circle';
import {
  TouchableHighlight,
  Image,
  Text,
  View,
  Alert,
  Platform,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { Constants, Location, Permissions } from 'expo';
import geolib from 'geolib';
import fingerprint from '../../assets/images/fingerprint-outline-variant.png';
import refresh from '../../assets/images/refresh.png';
import { checkInStyle } from './CheckInStyles';

import {
  checkIn,
  updateLocation,
  enableButton,
  pressIn,
  release,
  checkOut
} from './CheckInActions';

class CheckIn extends React.Component {
  constructor(props) {
    super(props);

    this.handleLongPress = this.handleLongPress.bind(this);
    this.handleRelease = this.handleRelease.bind(this);
    this.handlePressIn = this.handlePressIn.bind(this);
    this._getLocationAsync = this._getLocationAsync.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    if (Platform.OS === 'android' && !Constants.isDevice) {
      Alert.alert(
        'Error',
        'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'OK' }
        ],
        { cancelable: false }
      );
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async() => {
    const { dispatch } = this.props;
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      Alert.alert(
        'Error',
        'Enable location permissions on your device',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'OK' }
        ],
        { cancelable: false }
      );
    }

    const location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    const timestamp = moment(location.timestamp).format('h:mm:ssa');
    const longitude = Math.abs(parseFloat(location.coords.longitude.toFixed(6)));
    const latitude = Math.abs(parseFloat(location.coords.latitude.toFixed(6)));
    const originLocation = { longitude: 117.156072, latitude: 32.708922 };

    const isOnSite = geolib.isPointInCircle(
      { longitude, latitude },
      originLocation,
      25
    );
    dispatch(enableButton(isOnSite));

    const currentLocation = {
      time: timestamp,
      longitude,
      latitude
    };
    dispatch(updateLocation(currentLocation));
  };

  handlePressIn() {
    const { dispatch } = this.props;
    const percent = this.props.percent + 5;
    this.interval = setTimeout(this.handlePressIn, 10);
    dispatch(pressIn(percent));
  }

  handleRelease() {
    const { dispatch } = this.props;
    clearTimeout(this.interval);
    const percent = 0;
    const activeCircle = false;
    dispatch(release(percent, activeCircle));
  }

  handleLongPress() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      Alert.alert(
        'Error',
        'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'OK' }
        ],
        { cancelable: false }
      );
    } else {
      this._getLocationAsync();

      const {
        studentId,
        status,
        buttonEnabled,
        dispatch
      } = this.props;
      const weekday = moment().format('ddd');
      const isoDate = new Date().toISOString();
      const displayTime = moment().format('LT');
      checkin_outInstance = {
        id: studentId,
        isoDate,
        dow: weekday,
        room: '900',
        building: 'DV-SD-CA'
      };
      if (buttonEnabled) {
        if (status === 'checked out') {
          dispatch(checkIn(checkin_outInstance, displayTime));
        } else if (status === 'checked in') {
          dispatch(checkOut(checkin_outInstance, displayTime));
        }
      } else {
        Alert.alert(
          'Location Error',
          'Please check your location and refresh!',
          [
            { text: 'Cancel', style: 'cancel' },
            { text: 'OK' }
          ],
          { cancelable: false }
        );
      }
    }
  };

  handleRefresh() {
    this._getLocationAsync();
    Alert.alert(
      'Refreshed!',
      'Please check in again',
      [
        { text: 'OK' }
      ]
    );
  }

  render() {
    const {
      firstName,
      lastName,
      status,
      displayTime,
      percent,
      isCheckedIn
    } = this.props;

    const styles = StyleSheet.create(checkInStyle)


    return (
        <View style={styles.container}>
          <Text style={styles.textStyle}>PUNCH CLOCK</Text>
          <ProgressCircle
            style={styles.circle}
            percent={percent}
            radius={120}
            borderWidth={8}
            color='#FAFAFA'
          >
            <TouchableHighlight
              onLongPress={this.handleLongPress}
              onPressIn={this.handlePressIn}
              onPressOut={this.handleRelease}
              underlayColor='#EBECF0'
              style={
                isCheckedIn === false
                ? styles.imageContainerPink
                : styles.imageContainerGreen}
            >
              <Image style={styles.image} source={fingerprint} />
            </TouchableHighlight>
          </ProgressCircle>
          {displayTime !== ''
            ? <Text style={styles.textStyle1}>
                {firstName} {lastName}{'\n'}
                {status} at {displayTime}
              </Text>
            : <Text style={styles.textStyle1}>
                {'\n'}
              </Text>
          }
          <TouchableHighlight onPress={this.handleRefresh} underlayColor='#EBECF0'>
            <Image style={styles.icon} source={refresh} />
          </TouchableHighlight>
        </View>
    );
  }
};

function mapStoreToProps(store) {
  return {
    firstName: store.loginData.user.firstName,
    lastName: store.loginData.user.lastName,
    studentId: store.loginData.user.studentId,
    status: store.checkinData.status,
    displayTime: store.checkinData.displayTime,
    activeCircle: store.checkinData.activeCircle,
    percent: store.checkinData.percent,
    isCheckedIn: store.checkinData.isCheckedIn,
    buttonEnabled: store.checkinData.buttonEnabled,
    location: store.checkinData.location
  };
};

export default connect(mapStoreToProps)(CheckIn);
