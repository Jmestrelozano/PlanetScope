import React from 'react';
import {View} from 'react-native';

import {SortButton} from '../../ui/buttons/sortButton/SortButton';
import SortAsc from '../../svgs/SortAsc';
import SortDesc from '../../svgs/SortDesc';

import { SortControlsProps } from '../../../interfaces/components/common/sort/sortControls.interface';

import {styles} from './styles';

export const SortControls = ({onSortAsc, onSortDesc}: SortControlsProps) => {
  return (
    <View style={styles.container}>
      <SortButton
        onPress={onSortAsc}
        icon={<SortAsc fill="white" width={22} height={22} />}
      />
      <SortButton
        onPress={onSortDesc}
        icon={<SortDesc fill="white" width={22} height={22} />}
      />
    </View>
  );
};