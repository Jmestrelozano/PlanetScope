import React, {useEffect} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';

import { useStore } from './src/infrastructure/state/store';

import {LoaderSplash} from './src/presentation/components/common/loaders/loaderSplash/LoaderSplash';
import AppNavigator from './src/presentation/navigation/AppNavigator';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const {
    fetchPlanets,
    planetState: {isLoading},
  } = useStore(store => store);

  useEffect(() => {
    const init = async () => {
      fetchPlanets();
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);

  if (isLoading) {
    return <LoaderSplash />;
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
