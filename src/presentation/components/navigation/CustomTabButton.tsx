import {FC} from 'react';
import {TouchableOpacity} from 'react-native';

import {CustomTabButtonProps} from '../../interfaces/components/navigation/customTabButton/customTabButton.interface';

import {customTabButtonStyles} from './customTabButton.styles';

export const CustomTabButton: FC<CustomTabButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[customTabButtonStyles.tabButton]}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};