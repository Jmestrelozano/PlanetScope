import React, {FC} from 'react';
import {Text} from 'react-native';

import {HeaderTitleProps} from '../../../interfaces/components/ui/headers/headers.interface';
import {headerStyles} from './headers.styles';

export const HeaderTitle: FC<HeaderTitleProps> = ({title, style}) => {
  return <Text style={[headerStyles.title, style]}>{title}</Text>;
};