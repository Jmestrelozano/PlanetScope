import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
    MainTabs: {};
    Details: { planetId: string };
  };

export type NavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;

export type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

export type TabParamList = {
  Home: undefined;
  Favorites: undefined;
};