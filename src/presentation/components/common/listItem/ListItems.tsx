import React, {FC} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {Item} from './Item';

import {ItemListProps} from '../../../interfaces/components/common/listItem/listItem.interface';

export const ListItems: FC<ItemListProps> = ({
  data,
  search,
  ListEmptyComponent,
}) => {
  return (
    <FlatList
      data={data.filter(item =>
        item.englishName.toLowerCase().includes(search.toLowerCase()),
      )}
      bouncesZoom
      alwaysBounceVertical
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.listContainer}
      renderItem={({item}) => <Item item={item} />}
      ListEmptyComponent={ListEmptyComponent}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    gap: 40,
    paddingTop: 20,
    paddingBottom: 160,
  },
});