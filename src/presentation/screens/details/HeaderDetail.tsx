import { View, TouchableOpacity } from 'react-native';

import ChevronRight from '../../components/svgs/ChevronRight';
import Star from '../../components/svgs/Star';
import { HeaderTitle } from '../../components/ui/headers/headerTitle/HeaderTitle';

import { FAVORITE_COLORS } from '../../../config/colors';

import { HeaderDetailsProps } from '../../interfaces/screens/details/headerDetail.interface';

export const HeaderDetail = ({ title, isFavorite, onBack, onToggleFavorite }: HeaderDetailsProps) => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={onBack}>
        <ChevronRight rotation={180} />
      </TouchableOpacity>

      <HeaderTitle title={title} />

      <TouchableOpacity onPress={onToggleFavorite}>
        <Star fill={isFavorite ? FAVORITE_COLORS.active : FAVORITE_COLORS.inactive} />
      </TouchableOpacity>
    </View>
  );
};