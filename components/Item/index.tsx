import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Person } from '../../types';
import styles from './styles';

type props = {
  key: number;
  person: Person;
  onDelete: () => void;
};
const Item: React.FC<props> = ({ key, person, onDelete }) => (
  <View key={key} style={styles.container}>
    <View style={{ padding: 10 }}>
      <Text style={{ color: 'gray' }}>Person</Text>
      <Text
        style={{
          color: person.eye_color,
          fontWeight: 'bold',
          fontSize: 20,
        }}
      >
        {person.name}
      </Text>
    </View>
    <TouchableOpacity style={styles.buttonContainer} onPress={onDelete}>
      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
        Excluir
      </Text>
    </TouchableOpacity>
  </View>
);

export default React.memo(Item);
