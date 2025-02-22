import React, {useState} from 'react';
import {View} from 'react-native';

import {SearchInput} from '../../components/ui/inputs/searchInput/SearchInput';
import {HeaderTitle} from '../../components/ui/headers/HeaderTitle';
import {GradientBackground} from '../../components/common/gradientBackground/GradientBackground';
import {ListItems} from '../../components/common/listItem/ListItems';
import {ListEmpty} from '../../components/common/listItem/ListEmpty';

import {useStore} from '../../../state/store';
import {homeScreenStyles} from './homeScreen.styles';

const HomeScreen = () => {
  const {planets} = useStore(store => store);
  const [search, setSearch] = useState('');

  return (
    <GradientBackground>
      <View style={homeScreenStyles.container}>
        <HeaderTitle title="PLANETS" />
        <View style={homeScreenStyles.contentWrapper}>
          <SearchInput
            value={search}
            onChangeText={setSearch}
            style={{backgroundColor: 'white'}}
          />
          <ListItems
            data={planets}
            search={search}
            ListEmptyComponent={
              <ListEmpty
                title="Sorry"
                description="There is no related search"
              />
            }
          />
        </View>
      </View>
    </GradientBackground>
  );
};

export default HomeScreen;