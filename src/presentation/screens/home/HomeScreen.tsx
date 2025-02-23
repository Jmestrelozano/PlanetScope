import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import {SearchInput} from '../../components/ui/inputs/searchInput/SearchInput';
import {HeaderTitle} from '../../components/ui/headers/headerTitle/HeaderTitle';
import {GradientBackground} from '../../components/common/gradientBackground/GradientBackground';
import {ListItems} from '../../components/common/listItem/ListItems';
import {ListEmpty} from '../../components/common/listItem/ListEmpty';
import {SortControls} from '../../components/common/sort/SortControls';
import {ErrorBoundary} from '../../components/common/errorBoundary/ErrorBoundary';

import {useStore} from '../../../state/store';
import {styles} from './styles';

const HomeScreen = () => {
  const {
    planetState: {planets, errorMessage, hasError},
    sortPlanets,
  } = useStore(store => store);
  const [search, setSearch] = useState('');

  const isEmptyList = [].length === 0;
  const emptyMessage = isEmptyList
    ? {title: 'No planets available', description: 'Try again later'}
    : {title: 'No results found', description: 'Try another search'};

  return (
    <GradientBackground>
      <View style={styles.container}>
        <HeaderTitle title="PLANETS" />
        <ErrorBoundary hasError={hasError} errorMessage={errorMessage}>
          <View style={styles.contentWrapper}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 10,
              }}>
              <SearchInput
                value={search}
                onChangeText={setSearch}
                style={{backgroundColor: 'white', width: '70%'}}
              />
              <SortControls
                onSortAsc={() => sortPlanets('asc')}
                onSortDesc={() => sortPlanets('desc')}
              />
            </View>

            <ListItems
              data={planets}
              search={search}
              ListEmptyComponent={
                <ListEmpty
                  title={emptyMessage.title}
                  description={emptyMessage.description}
                />
              }
            />
          </View>
        </ErrorBoundary>
      </View>
    </GradientBackground>
  );
};

export default HomeScreen;