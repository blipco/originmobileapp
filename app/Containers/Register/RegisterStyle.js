import { colors } from '../../constants/originColors';
import { originFonts } from '../../constants/originFonts';
import { Platform } from 'react-native';

export let registerStyle = {
  container: {
      flex: 1,
      backgroundColor: colors.originGrey,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 30,
      paddingBottom: 250,
      marginBottom: 0

  },
  button: {
      marginTop: 50,
      marginBottom: 20,
      width: 320
  },
  formContainer: {
      width: 350,
      borderColor: 'transparent',
      borderBottomWidth: 0
  },
  inputContainer: {
      borderBottomWidth: Platform.OS === 'ios' ? 1 : 0,
      borderBottomColor: colors.originLogoDarkBlue
  },
  formLabel: {
      color: colors.originDarkBackground
  }
};

export let navigateStyle = {
  title: 'Register',
  headerStyle: {
      backgroundColor: colors.originText
  },
  headerLeft: null,
  headerTintColor: colors.originBlue,
  headerTitleStyle: {
    flex: 1,
    fontFamily: originFonts.originMwnlo,
    fontWeight: 'normal',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  }
};
