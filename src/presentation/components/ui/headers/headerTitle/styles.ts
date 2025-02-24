import { StyleProp, TextStyle } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const styles: { [key: string]: StyleProp<TextStyle> } = {
  title: {
    fontSize: RFPercentage(5),
    fontFamily: 'LilitaOne-Regular',
    fontWeight: '400',
    color: 'white',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: RFPercentage(3),
    fontFamily: 'LilitaOne-Regular',
    fontWeight: '300',
    color: '#ccc',
    textAlign: 'center',
  },
};