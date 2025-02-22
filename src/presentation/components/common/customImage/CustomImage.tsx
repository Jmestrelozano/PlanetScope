import React, {FC} from 'react';
import {Image} from 'react-native';

import {CustomImageProps} from '../../../interfaces/components/common/customImage/customImage.interface';
import {customImageStyles} from './customImage.styles';

export const CustomImage: FC<CustomImageProps> = ({imageSource, style}) => {
  return (
    <Image source={imageSource} style={[customImageStyles.image, style]} />
  );
};