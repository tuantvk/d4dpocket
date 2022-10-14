// https://github.com/ptelad/react-native-iphone-x-helper/blob/a171acde95b11d16e96fef451d273088b135e770/index.js

import { Dimensions } from 'react-native';

import isIphone from './isIphone';

const isIphoneX = () => {
  const dimen = Dimensions.get('window');
  return (
    isIphone() &&
    ((dimen.height === 780 || dimen.width === 780)
      || (dimen.height === 812 || dimen.width === 812)
      || (dimen.height === 844 || dimen.width === 844)
      || (dimen.height === 896 || dimen.width === 896)
      || (dimen.height === 926 || dimen.width === 926)
      || (dimen.height === 852 || dimen.width === 852) // 14 Pro
      || (dimen.height === 932 || dimen.width === 932)) // 14 Pro Max
  );
};

export default isIphoneX;
