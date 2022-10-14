// https://github.com/ptelad/react-native-iphone-x-helper/blob/a171acde95b11d16e96fef451d273088b135e770/index.js

import { Platform } from 'react-native';

const isIphone = () => {
  return Platform.OS === "ios" && !Platform.isPad && !Platform.isTV;
}

export default isIphone;