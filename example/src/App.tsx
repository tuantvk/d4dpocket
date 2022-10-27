import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { KeyboardSpacer } from 'd4dpocket';

import Row from './Row';
import styles from './styles';

const { width, height } = Dimensions.get('window');

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Row title="Dimensions">
          <Text>width: {width}</Text>
          <Text>height: {height}</Text>
          <Text>ratio: {width / height}</Text>
        </Row>
        <Row title="RFValue">
          <Text style={styles.text}>Lorem Ipsum is simply dummy text</Text>
          <View style={styles.wScale} />
        </Row>
        <Row title="wScale">
          <View style={styles.wScale} />
        </Row>
        <Row title="hScale">
          <View style={styles.hScale} />
        </Row>
        <Row title="scale" style={styles.row}>
          <View style={styles.scale} />
          <View style={styles.scale} />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Button</Text>
          </TouchableOpacity>
        </Row>
        <TextInput placeholder='Placeholder here...' />
        <KeyboardSpacer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
