import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import {calculateSurfaceArea} from '../../../application/useCases/calculateSurfaceArea';
import {convertKelvinToCelsius} from '../../../application/useCases/convertKelvinToCelsius';
import {formatNumber} from '../../../application/useCases/formatNumber';

import {GradientBackground} from '../../components/common/gradientBackground/GradientBackground';
import {HeaderTitle} from '../../components/ui/headers/headerTitle/HeaderTitle';
import {ItemDetail} from './ItemDetail';
import {CustomImage} from '../../components/common/customImage/CustomImage';
import ChevronRight from '../../components/svgs/ChevronRight';
import Star from '../../components/svgs/Star';

import {planetImages} from '../../../config/planetImages';
import {useStore} from '../../../state/store';

import {DetailsScreenRouteProp} from '../../interfaces/navigation/routeTypes.interface';

import {detailsScreenStyles} from './styles';

const DetailsScreen = () => {
  const navigation = useNavigation();
  const {
    params: {planetId},
  } = useRoute<DetailsScreenRouteProp>();
  const {
    getPlanetById,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  } = useStore(store => store);
  const [planet] = useState(getPlanetById(planetId));

  if (!planet) return null;

  const imageSource = planetImages[planet.id as keyof typeof planetImages];

  const mass = planet.mass.massValue * Math.pow(10, planet.mass.massExponent);
  const volume = planet.vol.volValue * Math.pow(10, planet.vol.volExponent);

  const planetDetails = [
    {label: 'Area', value: `${calculateSurfaceArea(planet.meanRadius)} Km`},
    {
      label: 'Temperature',
      value: `${convertKelvinToCelsius(planet.avgTemp)} °C`,
    },
    {label: 'Mass', value: `${formatNumber(mass)} kg`},
    {label: 'Vol', value: `${formatNumber(volume)} km³`},
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
          <View
            style={{
              paddingHorizontal: 20,
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={goBack}>
              <ChevronRight rotation={180} />
            </TouchableOpacity>

            <HeaderTitle title={planet.englishName} />

            <TouchableOpacity onPress={toggleFavorite}>
              <Star fill={isFavorite(planet.id) ? 'gold' : 'white'} />
            </TouchableOpacity>
          </View>

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
              <ItemDetail
                key={index}
                label={item.label}
                value={item.value}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </GradientBackground>
  );
};

export default DetailsScreen;