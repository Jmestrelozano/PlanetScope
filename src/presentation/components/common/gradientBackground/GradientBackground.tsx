import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { GradientBackgroundProps } from '../../../interfaces/components/common/gradientBackground/gradientBackground.interface';

import {styles} from './styles';

export const GradientBackground: React.FC<GradientBackgroundProps> = ({
  children,
}) => {
  return (
    <LinearGradient
      colors={['#2d1309', '#5a2e12', '#9b4f1e', '#d87a3a', '#f0b48a']}
      start={{x: 0.2, y: 0}}
      end={{x: 0.8, y: 1}}
      style={styles.gradientBackground}>
      {children}
    </LinearGradient>
  );
};