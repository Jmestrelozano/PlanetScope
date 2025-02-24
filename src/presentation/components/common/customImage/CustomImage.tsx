import React, {FC} from 'react';
import {Image} from 'react-native';

import {CustomImageProps} from '../../../interfaces/components/common/customImage/customImage.interface';
import {styles} from './styles';

export const CustomImage: FC<CustomImageProps> = ({imageSource, style}) => {
  return (
    <Image source={imageSource} style={[styles.image, style]} />
  );
};