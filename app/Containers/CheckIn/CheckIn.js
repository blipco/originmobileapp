import React from 'react';
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

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:60,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageContainer: {
      shadowOffset:{ width: 5, height: 5 },
      shadowColor: '#00000069',
      shadowOpacity: 1, 
      height:256,
      width: 256,
      borderRadius: 128,
      backgroundColor: '#FF566F',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 30,
    },
    imageContainer1: {
      height:256,
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
      height:128,
      width: 128,
      borderRadius: 64,
    },
    textStyle: {
      fontSize: 50,
      color: '#64ABDD'
    },
    textStyle1: {
      
    }
  })

class CheckIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      styling: styles.imageContainer
    };
    this.handleCheckinButton = this.handleCheckinButton.bind(this);
  }

    handleCheckinButton() {
      if (this.state.active == false) {
        this.setState({active: true})
      } else {
        if(this.state.active == true) {
          this.setState({active:false})
      }
    }
  }
  render() {
    const active = this.state.active;
    return(
      <ScrollView keyboardDismissMode='on-drag'>
        <View style={styles.container}>
       <Text style={styles.textStyle}>CHECK IN</Text>
       <TouchableHighlight underlayColor='green' onPress={this.handleCheckinButton} style={ active == false ? styles.imageContainer : styles.imageContainer1 }>
          <Image style={ styles.image } source={require('../../assets/images/fingerprint-outline-variant.png')} />
       </TouchableHighlight>
       <Text style={styles.textStyle1}>
          {this.props.firstName}{this.props.lastName} is {this.props.checkedIn}
        </Text>
      </View>  
      </ScrollView>
    )
  }
    
}


function mapStoreToProps(store) {
  return {
      firstName: store.registerData.firstName,
      lastName: store.registerData.lastName,
  };
}

export default connect(mapStoreToProps)(CheckIn);
