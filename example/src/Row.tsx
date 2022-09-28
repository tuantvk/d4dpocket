import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';

interface IProps {
  title: string;
  style?: ViewStyle;
  children?: React.ReactNode;
}

const Row = ({ title, style, children }: IProps) => {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>Row: {title}</Text>
      <View style={style}>{children ? children : <Text>No data</Text>}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    borderBottomColor: '#51a1c4',
    borderBottomWidth: 0.8,
    padding: 10,
  },
  title: {
    fontWeight: '700',
    color: '#000000',
  },
});

export default Row;
