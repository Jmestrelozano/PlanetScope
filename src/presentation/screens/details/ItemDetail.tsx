import React, {FC} from 'react';
import {View, Text} from 'react-native';

import { ItemDetailProps } from '../../interfaces/screens/details/itemDetail.interface';

import {itemDetailStyles} from './detailsScreen.styles';

export const ItemDetail: FC<ItemDetailProps> = ({label, value}) => {
  return (
    <View style={itemDetailStyles.container}>
      <Text style={itemDetailStyles.text}>{label}</Text>
      <Text style={itemDetailStyles.text}>{value}</Text>
    </View>
  );
};