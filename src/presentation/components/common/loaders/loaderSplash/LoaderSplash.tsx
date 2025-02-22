import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';

export const LoaderSplash = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}>
      <LottieView
        style={{width: 300, height: 300}}
        source={require('../../../../../assets/images/cohete.json')}
        autoPlay
        loop
      />
      <LottieView
        style={{width: 300, height: 150, position: 'absolute', bottom: '20%'}}
        source={require('../../../../../assets/images/loader.json')}
        autoPlay
        loop
      />
    </View>
  );
};