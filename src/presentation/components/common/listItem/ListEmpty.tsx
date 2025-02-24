import React, {FC} from 'react';
import {View, Text} from 'react-native';

import {ListEmptyProps} from '../../../interfaces/components/common/listItem/listEmpty.interface';
import {styles} from './styles';

export const ListEmpty: FC<ListEmptyProps> = ({title, description}) => {
  return (
    <View style={styles.containerEmpty}>
      <Text style={styles.titleEmpty}>{title}</Text>
      <Text style={styles.descriptionEmpty}>{description}</Text>
    </View>
  );
};