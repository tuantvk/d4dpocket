import { Dimensions, Platform, StatusBar } from 'react-native';

import isTablet from './isTablet';
import isIphoneX from './isIphoneX';

const baseWidth = 360;
const baseHeight = isTablet() ? 566 : 592;

const { height, width } = Dimensions.get('window');
const standardLength = width > height ? width : height;
const currentHeight = StatusBar.currentHeight || 0;
const offset = width > height ? 0 : Platform.OS === 'ios' ? 78 : currentHeight;

const deviceHeight =
  isIphoneX() || Platform.OS === 'android'
    ? standardLength - offset
    : standardLength;

export const RFValue = (fontSize: number, standardScreenHeight = 720) => {
  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
};

export const scale = (size: number) => (width / baseWidth) * size;
export const wScale = (size: number) => (height / baseHeight) * size;
export const hScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
