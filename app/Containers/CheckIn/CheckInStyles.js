import { colors } from '../../constants/originColors';
import { originFonts } from '../../constants/originFonts';

export let checkInStyle = {
  container: {
    flex: 1,
    backgroundColor: colors.originGrey,
    marginTop: 55,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainerPink: {
    height: 256,
    width: 256,
    borderRadius: 128,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: colors.originPink
  },
  imageContainerGreen: {
    height: 256,
    width: 256,
    borderRadius: 128,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: colors.originGreen
  },
  image: {
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 128,
    width: 128,
    borderRadius: 64
  },
  icon: {
    marginTop: 55,
    height: 30,
    width: 30
  },
  textStyle: {
    fontSize: 45,
    color: colors.originBlue,
    marginBottom: 20,
    textAlign: 'center'
  },
  textStyle1: {
    fontSize: 25,
    color: colors.originBlue,
    marginTop: 30,
    textAlign: 'center'
  }
};

export const navigateStyle = {
  title: 'Check In',
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
}};
