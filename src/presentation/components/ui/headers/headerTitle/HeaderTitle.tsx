import React, {FC} from 'react';
import {Text} from 'react-native';

import {HeaderTitleProps} from '../../../../interfaces/components/ui/headers/headers.interface';
import { styles } from './styles';

export const HeaderTitle: FC<HeaderTitleProps> = ({title, style}) => {
  return <Text style={[styles.title, style]}>{title}</Text>;
};