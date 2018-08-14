import React from 'react';
import { checkIn } from './CheckInActions';
import moment from 'moment';
import {
  StyleSheet,
  Button,
  TouchableHighlight,
  Image,
  Text,
  View,
  TextInput,
  Linking,
  Alert,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';

class CheckIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      styling: styles.imageContainer
    };
    this.handleCheckinButton = this.handleCheckinButton.bind(this);
  };

  handleCheckinButton() {

    const active = this.state.active;
    const { studentId, dispatch } = this.props;
    const weekday = moment().format('ddd');
    const isoDate = new Date().toISOString();
    const displayDate = moment().format('LT');

    if (this.state.active == false) {
      this.setState({ active: true })
    } else {
      if (this.state.active == true) {
        this.setState({ active: false })
      }
    }

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
    const { firstName, lastName, status, displayDate, dispatch } = this.props;
    return (
      <ScrollView keyboardDismissMode='on-drag'>
        <View style={styles.container}>
          <Text style={styles.textStyle}>CHECK IN</Text>
          <TouchableHighlight onPress={this.handleCheckinButton} style={styles.imageContainer}>
            <Image style={styles.image} source={require('../../assets/images/fingerprint-outline-variant.png')} />
          </TouchableHighlight>
          {displayDate != '' ?
            <Text style={styles.textStyle1}>
              {firstName} {lastName} {status} at {displayDate}.
          </Text>
            : <Text></Text>
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
  imageContainer: {
    shadowOffset: { width: 5, height: 5 },
    shadowColor: '#00000069',
    shadowOpacity: 1,
    height: 256,
    width: 256,
    borderRadius: 128,
    backgroundColor: '#FF566F',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  imageContainer1: {
    height: 256,
    width: 256,
    borderRadius: 128,
    backgroundColor: '#FF566F',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
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

  }
});

function mapStoreToProps(store) {
  return {
    firstName: store.loginData.user.firstName,
    lastName: store.loginData.user.lastName,
    studentId: store.loginData.user.studentId,
    status: store.checkinData.status,
    displayDate: store.checkinData.displayDate
  };
};

export default connect(mapStoreToProps)(CheckIn);
