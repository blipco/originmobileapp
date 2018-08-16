import { colors } from '../../constants/originColors';
import { originFonts } from '../../constants/originFonts';
import { Platform } from 'react-native';

export const loginStyle = {
  container: {
    flex: 1,
    backgroundColor: colors.originGrey,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 305
  },
  button: {
    marginTop: 50,
    marginBottom: 20
  },
  formContainer: {
    width: 350,
    borderColor: 'transparent',
    borderBottomWidth: 0
  },
  inputContainer: {
    borderBottomWidth: Platform.OS === 'ios' ? 1 : 0,
    borderBottomColor: colors.originDarkBlue
  },
  formLabel: {
    backgroundColor: colors.originGrey,
    color: colors.originDarkBackground
  }
};

export let navigateStyle = {
  title: 'Login',
  headerStyle: {
    backgroundColor: colors.originText
  },
  headerTintColor: colors.originBlue,
  headerTitleStyle: {
    fontFamily: originFonts.originMwnlo,
    fontWeight: 'bold'
  }
};
