import {StyleSheet} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  column: {
    flexDirection: 'column',
  },
  title: {
    fontFamily: 'LilitaOne-Regular',
    fontWeight: '400',
    color: 'white',
    fontSize: RFPercentage(4),
  },
  description: {
    fontFamily: 'OpenSans-Regular',
    fontWeight: '400',
    color: 'white',
    fontSize: RFPercentage(2),
  },
  containerEmpty: {
    flex:1,
    minHeight: responsiveHeight(50),
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleEmpty: {
    fontFamily: 'LilitaOne-Regular',
    fontWeight: '400',
    color: 'white',
    fontSize: RFPercentage(4),
  },
  descriptionEmpty: {
    fontFamily: 'OpenSans-Regular',
    fontWeight: '400',
    color: 'white',
    fontSize: RFPercentage(2),
  },
});