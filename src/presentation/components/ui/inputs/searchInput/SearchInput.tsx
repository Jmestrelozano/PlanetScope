import React, {FC} from 'react';
import {TextInput} from 'react-native';

import {SearchInputProps} from '../../../../interfaces/components/ui/inputs/searchInput/searchInput.interface';
import { styles } from './styles';

export const SearchInput: FC<SearchInputProps> = ({
  value,
  onChangeText,
  placeholder = 'Search planets...',
  style
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      style={[styles.input, style]}
      onChangeText={onChangeText}
    />
  );
};