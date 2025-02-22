import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';

import {CustomImage} from '../customImage/CustomImage';
import ChevronRight from '../../svgs/ChevronRight';

import {planetImages} from '../../../../config/planetImages';

import {NavigationProp} from '../../../interfaces/navigation/routeTypes.interface';
import {ItemProps} from '../../../interfaces/components/common/listItem/item.interface';

import {styles} from './styles';

export const Item: FC<ItemProps> = ({item}) => {
  const navigation = useNavigation<NavigationProp>();

  const handleNavigateToDetail = (planetId: string) =>
    navigation.navigate('Details', {planetId});

  const imageSource = planetImages[item.id as keyof typeof planetImages];

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <CustomImage imageSource={imageSource} />
        <View style={styles.column}>
          <Text style={styles.title}>{item.englishName}</Text>

          <Text style={styles.description}>
            {item.semimajorAxis.toLocaleString()} Km
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => handleNavigateToDetail(item.id)}>
        <ChevronRight />
      </TouchableOpacity>
    </View>
  );
};