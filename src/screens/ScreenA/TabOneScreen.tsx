import React from 'react';

import { Text, View } from '../../../components/Themed';
import styles from './styles';
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Type some text below</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}
