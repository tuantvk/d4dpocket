import React from 'react';
import { ScrollView as RNScrollView, ScrollViewProps } from 'react-native';

const ScrollView = (props: ScrollViewProps) => {
  return <RNScrollView scrollIndicatorInsets={{ right: 1 }} {...props} />;
};

export default ScrollView;
