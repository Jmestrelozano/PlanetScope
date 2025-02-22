import React, {FC} from 'react';
import {TextInput} from 'react-native';

import {SearchInputProps} from '../../../../interfaces/components/ui/inputs/searchInput/searchInput.interface';
import {searchInputStyles} from './searchInput.styles';

export const SearchInput: FC<SearchInputProps> = ({
  value,
  onChangeText,
  placeholder = 'Search planets...',
  style = searchInputStyles.input,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      style={[searchInputStyles.input, style]}
      onChangeText={onChangeText}
    />
  );
};