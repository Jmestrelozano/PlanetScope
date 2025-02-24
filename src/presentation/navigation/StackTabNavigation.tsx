import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Text,
  StyleSheet,
} from 'react-native';

import HomeScreen from '../screens/home/HomeScreen';
import FavoriteScreen from '../screens/favorites/FavoriteScreen';
import Home from '../components/svgs/Home';
import Heart from '../components/svgs/Heart';
import {CustomTabButton} from '../components/navigation/CustomTabButton';

import {TabParamList} from '../interfaces/navigation/routeTypes.interface';

const Tab = createBottomTabNavigator<TabParamList>();

export const StackTabNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarButton: props => <CustomTabButton {...props} />,
        tabBarIcon: ({focused}: {focused: boolean}) => {
          return route.name === 'Home' ? (
            <Home stroke={focused ? 'white' : '#1C274C'} />
          ) : (
            <Heart fill={focused ? 'white' : '#1C274C'} />
          );
        },
        tabBarLabel: ({focused}: {focused: boolean}) => (
          <Text style={[styles.tabLabel, focused && styles.activeLabel]}>
            {route.name}
          </Text>
        ),
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorites" component={FavoriteScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#d87a3a',
    borderRadius: 30,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 5,
  },
  tabButton: {
    height: 70,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    padding: 10,
  },
  tabLabel: {
    fontFamily: 'LilitaOne-Regular',
    fontWeight: '400',
    fontSize: 12,
    color: '#1C274C',
  },
  activeLabel: {
    fontFamily: 'LilitaOne-Regular',
    fontWeight: '400',
    fontSize: 12,
    color: 'white',
  },
});