// https://github.com/ptelad/react-native-iphone-x-helper/blob/a171acde95b11d16e96fef451d273088b135e770/index.js

import { Dimensions } from 'react-native';

import isIphone from './isIphone';

const hasIsland = () => {
  const dimen = Dimensions.get('window');
  return (
    isIphone() &&
    ((dimen.height === 852 || dimen.width === 852) // 14 Pro
      || (dimen.height === 932 || dimen.width === 932)) // 14 Pro Max
  );
}

export default hasIsland;
