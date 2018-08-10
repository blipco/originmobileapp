import React from 'react';
import {firstNameEntry, lastNameEntry} from '../Register/RegisterActions';
import { StyleSheet, 
  Button,
  TouchableHighlight,
  Image,
  Text, 
  View, 
  TextInput, 
  Linking, 
  Alert, 
  ScrollView } from 'react-native';
  import { connect } from 'react-redux';

class CheckIn extends React.Component {
  render() {
    return(
      <ScrollView keyboardDismissMode='on-drag'>
        <View style={styles.container}>
       <Text style={styles.textStyle}>CHECK IN</Text>
       <TouchableHighlight onPress={handleCheckinButton} style={ styles.imageContainer }>
          <Image style={ styles.image } source={require('../../assets/images/fingerprint-outline-variant.png')} />
       </TouchableHighlight>
       <Text style={styles.textStyle1}>
          {this.props.firstName}{this.props.lastName} is {this.props.Checkedin}
        </Text>
      </View>  
      </ScrollView>
    )
  }
    
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    height:256,
    width: 256,
    borderRadius: 128,
    backgroundColor: '#FF566F',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginLeft: 'auto',
    marginRight: 'auto',
    height:128,
    width: 128,
    borderRadius: 64
  },
  textStyle: {
    fontSize: 50,
    color: '#64ABDD'
  },
  textStyle1: {
    
  }
})
function handleCheckinButton() {
  
}

function mapStoreToProps(store) {
  return {
      firstName: store.registerData.firstName,
      lastName: store.registerData.lastName
  };
}

export default connect(mapStoreToProps)(CheckIn);
