import React, {useEffect} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import { LoaderSplash } from './src/presentation/components/common/loaders/loaderSplash/LoaderSplash';
import AppNavigator from './src/presentation/navigation/AppNavigator';

import {useStore} from './src/state/store';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const {fetchPlanets, planets} = useStore(store => store);

  useEffect(() => {
    fetchPlanets();
  }, []);

  if (planets.length === 0) {
    return (
     <LoaderSplash />
    );
  }

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;
