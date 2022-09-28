import { Platform, ViewStyle } from 'react-native';

import isTablet from './isTablet';
import isIphoneX from './isIphoneX';

interface IProps {
  tablet: ViewStyle;
  iPad: ViewStyle;
  iPhoneX: ViewStyle;
  base: ViewStyle;
}

const StylePlatforms = (styles: IProps) => {
  let style = null;
  if (isTablet()) {
    style = styles?.tablet;
  }
  if (Platform.OS === 'ios' && Platform.isPad) {
    style = styles?.iPad;
  }
  if (isIphoneX()) {
    style = styles?.iPhoneX;
  }
  return style || styles?.base || {};
};

export default StylePlatforms;
