import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

const Button = ({
  style,
  disabled,
  activeOpacity = 0.95,
  ...rest
}: TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      {...{ activeOpacity, disabled }}
      {...rest}
      style={[style, disabled && styles.disabled]}
    />
  );
};

const styles = StyleSheet.create({
  disabled: {
    opacity: 0.7,
  },
});

export default Button;
