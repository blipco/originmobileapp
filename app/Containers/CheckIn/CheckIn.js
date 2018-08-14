import React from 'react';
import { checkIn } from './CheckInActions';
import { release } from './CheckInActions';
import { pressIn } from './CheckInActions';
import moment from 'moment';
import ProgressCircle from 'react-native-progress-circle';
import fingerprint from '../../assets/images/fingerprint-outline-variant.png';
import {StyleSheet,
        Button,
        TouchableHighlight,
        Image,
        Text,
        View,
        TextInput,
        Linking,
        Alert,
        ScrollView} from 'react-native';
import { connect } from 'react-redux';

class CheckIn extends React.Component {
  constructor(props) {
    super(props);
    this.handleLongPress = this.handleLongPress.bind(this);
    this.handleRelease = this.handleRelease.bind(this);
    this.handlePressIn = this.handlePressIn.bind(this);
  }

  handlePressIn() {
    const { dispatch } = this.props;
    let percent = this.props.percent + 5
    this.interval = setTimeout(this.handlePressIn, 10)
    dispatch(pressIn(percent))
  }

  handleRelease() {
    const { dispatch } = this.props;
    clearTimeout(this.interval)
    let percent = 0
    let activeCircle = false
    dispatch(release(percent, activeCircle))
  }

  handleLongPress() {
    const { studentId, dispatch } = this.props;
    const weekday = moment().format('ddd');
    const isoDate = new Date().toISOString();
    const displayDate = moment().format('LT');
    checkinInstance = {
      "id": studentId,
      "isoDate": isoDate,
      "dow": weekday,
      "room": "900",
      "building": "DV-SD-CA"
    }
    dispatch(checkIn(checkinInstance, displayDate));
  };

  render() {
    const { firstName, 
            lastName, 
            status, 
            displayDate, 
            percent } = this.props;
    return (
      <ScrollView keyboardDismissMode='on-drag'>
        <View style={styles.container}>
          <Text style={styles.textStyle}>CHECK IN</Text>
          <ProgressCircle style={styles.circle}
                          percent={percent}
                          radius={120}
                          borderWidth={8}
                          color= '#FAFAFA'
                          >
            <TouchableHighlight onLongPress={this.handleLongPress} 
                                onPressIn={this.handlePressIn} 
                                onPressOut={this.handleRelease}
                                underlayColor='#EBECF0' 
                                style={this.props.isCheckedIn === false ? styles.imageContainerPink : styles.imageContainerGreen}>
              <Image style={styles.image} source={fingerprint} />
            </TouchableHighlight>
          </ProgressCircle>
          {displayDate != '' 
          ?
            <Text style={styles.textStyle1}>
              {firstName} {lastName} {status} at {displayDate}.
            </Text>
          :
          <Text></Text>
          }
        </View>
      </ScrollView>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainerPink: {
    height: 256,
    width: 256,
    borderRadius: 128,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#FF566F'
  },
  imageContainerGreen: {
    height: 256,
    width: 256,
    borderRadius: 128,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#8BC670'
  },
  image: {
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 128,
    width: 128,
    borderRadius: 64,
  },
  textStyle: {
    fontSize: 50,
    color: '#64ABDD'
  },
  textStyle1: {
    fontSize: 25,
    color: '#64ABDD'
  }
});

function mapStoreToProps(store) {
  return {
    firstName: store.loginData.user.firstName,
    lastName: store.loginData.user.lastName,
    studentId: store.loginData.user.studentId,
    status: store.checkinData.status,
    displayDate: store.checkinData.displayDate,
    activeCircle: store.checkinData.activeCircle,
    percent: store.checkinData.percent,
    isCheckedIn: store.checkinData.isCheckedIn 
  };
};

export default connect(mapStoreToProps)(CheckIn);
