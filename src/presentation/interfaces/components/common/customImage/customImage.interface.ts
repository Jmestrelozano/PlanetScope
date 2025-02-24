import {ImageSourcePropType, ImageStyle, StyleProp} from 'react-native';

export interface CustomImageProps {
  imageSource: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
}