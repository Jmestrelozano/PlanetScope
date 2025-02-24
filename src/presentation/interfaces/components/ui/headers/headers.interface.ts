import { StyleProp, TextStyle } from 'react-native';

export interface HeaderBaseProps {
  style?: StyleProp<TextStyle>;
}

export interface HeaderTitleProps extends HeaderBaseProps {
  title: string;
}