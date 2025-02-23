import {StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const detailsScreenStyles = StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: '10%',
      alignItems: 'center',
    },
    content: {
      flexDirection: 'column',
      alignItems:"center",
      gap: 20,
    },
    title: {
      color: 'white',
      fontSize: RFPercentage(4),
      fontFamily: 'OpenSans-Medium',
      fontWeight: '500',
      textAlign: 'center',
      marginBottom: 10,
    },
    scrollContainer: {
      flex: 1,
      width: '100%',
    },
    scrollContent: {
      flexGrow: 1,
      paddingHorizontal: 20,
      paddingBottom: 40,
    },
  });

  
export const itemDetailStyles = StyleSheet.create({
  container: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontFamily: 'OpenSans-Regular',
    fontWeight: '400',
    fontSize: RFPercentage(2.5),
  },
});