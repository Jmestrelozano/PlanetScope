import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import {calculateSurfaceAreaUseCase} from '../../../application/useCases/utils/calculateSurfaceArea';
import {convertKelvinToCelsiusUseCase} from '../../../application/useCases/utils/convertKelvinToCelsius';
import {formatNumberUseCase} from '../../../application/useCases/utils/formatNumber';

import {GradientBackground} from '../../components/common/gradientBackground/GradientBackground';
import {ItemDetail} from './ItemDetail';
import {CustomImage} from '../../components/common/customImage/CustomImage';
import {HeaderDetail} from './HeaderDetail';

import {planetImages} from '../../../config/planetImages';
import { useStore } from '../../../infrastructure/state/store';

import {DetailsScreenRouteProp} from '../../interfaces/navigation/routeTypes.interface';

import {detailsScreenStyles} from './styles';

const DetailsScreen = () => {
  const navigation = useNavigation();
  const {
    params: {planetId},
  } = useRoute<DetailsScreenRouteProp>();
  const {getPlanetById, addToFavorites, removeFromFavorites, isFavorite} =
    useStore(store => store);
  const [planet] = useState(getPlanetById(planetId));

  if (!planet) return null;

  const imageSource = planetImages[planet.id as keyof typeof planetImages];

  const mass = planet.mass.massValue * Math.pow(10, planet.mass.massExponent);
  const volume = planet.vol.volValue * Math.pow(10, planet.vol.volExponent);

  const planetDetails = [
    {
      label: 'Area',
      value: `${calculateSurfaceAreaUseCase(planet.meanRadius)} Km`,
    },
    {
      label: 'Temperature',
      value: `${convertKelvinToCelsiusUseCase(planet.avgTemp)} °C`,
    },
    {label: 'Mass', value: `${formatNumberUseCase(mass)} kg`},
    {label: 'Vol', value: `${formatNumberUseCase(volume)} km³`},
    {label: 'Density', value: `${planet.density} g/cm³`},
    {label: 'Gravity', value: `${planet.gravity} m/s²`},
  ];

  const toggleFavorite = () => {
    if (isFavorite(planet.id)) {
      removeFromFavorites(planet.id);
    } else {
      addToFavorites(planet);
    }
  };

  const goBack = () => navigation.goBack();

  return (
    <GradientBackground>
      <View style={detailsScreenStyles.container}>
        <View style={detailsScreenStyles.content}>
          <HeaderDetail
            title={planet.englishName}
            isFavorite={isFavorite(planet.id)}
            onBack={goBack}
            onToggleFavorite={toggleFavorite}
          />

          <CustomImage
            imageSource={imageSource}
            style={{width: 250, height: 250}}
          />
          <Text style={detailsScreenStyles.title}>{planet.englishName}</Text>
        </View>

        <View style={detailsScreenStyles.scrollContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={detailsScreenStyles.scrollContent}>
            {planetDetails.map((item, index) => (
              <ItemDetail key={index} label={item.label} value={item.value} />
            ))}
          </ScrollView>
        </View>
      </View>
    </GradientBackground>
  );
};

export default DetailsScreen;