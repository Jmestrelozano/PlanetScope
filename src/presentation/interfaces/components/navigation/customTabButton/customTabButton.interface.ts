import {ReactNode} from 'react';
import {GestureResponderEvent} from 'react-native';

export interface CustomTabButtonProps {
  children: ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  isFocused?: boolean;
}
