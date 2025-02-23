import React from 'react';
import {TouchableOpacity} from 'react-native';

import {SortButtonProps} from '../../../../interfaces/components/ui/buttons/sortButton/sortButton.interface';
import {styles} from './styles';

export const SortButton = ({onPress, icon}: SortButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
};