import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DetailsScreen from '../screens/details/DetailsScreen';
import { StackTabNavigation } from './StackTabNavigation';

import { RootStackParamList } from '../interfaces/navigation/routeTypes.interface';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <Stack.Navigator screenOptions={{
    headerShown: false
  }} initialRouteName="MainTabs">
    <Stack.Screen name="MainTabs" component={StackTabNavigation} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
);

export default AppNavigator;