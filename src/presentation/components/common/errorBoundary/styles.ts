import {StyleSheet} from 'react-native';
import {responsiveScreenWidth} from 'react-native-responsive-dimensions';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 10,
  },
  title: {
    fontFamily: 'LilitaOne-Regular',
    fontWeight: '400',
    color: 'white',
    fontSize: RFPercentage(3),
  },
  message: {
    fontFamily: 'OpenSans-Regular',
    fontWeight: '400',
    fontSize: RFPercentage(2),
    color: 'white',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#d87a3a',
    borderRadius: 8,
    padding: 10,
    width: responsiveScreenWidth(30),
    elevation: 1,
  },
  textButton: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'OpenSans-Medium',
    fontWeight: 500,
    fontSize: RFPercentage(1.8),
  },
});