import {FC} from 'react';
import {TouchableOpacity} from 'react-native';

import {CustomTabButtonProps} from '../../interfaces/components/navigation/customTabButton/customTabButton.interface';

import {styles} from './styles';

export const CustomTabButton: FC<CustomTabButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.tabButton]}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};