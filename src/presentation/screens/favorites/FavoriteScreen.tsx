import React, {useState} from 'react';
import {View} from 'react-native';

import {GradientBackground} from '../../components/common/gradientBackground/GradientBackground';
import {HeaderTitle} from '../../components/ui/headers/HeaderTitle';
import {ListItems} from '../../components/common/listItem/ListItems';
import { ListEmpty } from '../../components/common/listItem/ListEmpty';

import {useStore} from '../../../state/store';
import {favoriteScreenStyles} from './favoriteScreen.styles';

const FavoriteScreen = () => {
  const {favorites} = useStore(store => store);
  const [search, setSearch] = useState('');

  return (
    <GradientBackground>
      <View style={favoriteScreenStyles.container}>
        <HeaderTitle title="FAVORITES" />

        <View style={{paddingHorizontal: 20}}>
          <ListItems
            data={favorites}
            search={search}
            ListEmptyComponent={
              <ListEmpty
                title="Sorry"
                description="You have no favorites added"
              />
            }
          />
        </View>
      </View>
    </GradientBackground>
  );
};

export default FavoriteScreen;