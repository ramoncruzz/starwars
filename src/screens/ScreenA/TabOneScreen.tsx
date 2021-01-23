import React, { useState } from 'react';
import { TextInput, Button, View, Text } from 'react-native';
import styles from './styles';
import { findOcurrencies } from '../../utils/functions';

const Item: React.FC<{ term: string; ocurrencies: number }> = ({
  term,
  ocurrencies,
}): JSX.Element => (
  <View>
    <Text>
      <Text style={{ fontWeight: 'bold' }}>{term}:</Text> {ocurrencies}{' '}
    </Text>
  </View>
);

const ItemContainer: React.FC = ({ children }): JSX.Element => (
  <View style={styles.itemContainer}>{children}</View>
);

const TabOneScreen: React.FC = (): JSX.Element => {
  const [text, setText] = useState<string>('');
  const [ocurrencyList, setOcurrencyList] = useState<any[]>([]);
  const onPress = () =>
    !!text ? setOcurrencyList(findOcurrencies(text)) : setOcurrencyList([]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Type some text below</Text>
      <TextInput
        multiline
        numberOfLines={3}
        style={styles.textInput}
        onChangeText={(event) => setText(event)}
      />
      <Button title="Verificar Ocorrências" onPress={onPress} />
      {!!text && (
        <ItemContainer>
          {ocurrencyList.map((item) => {
            const [term] = Object.keys(item);
            const ocurrencies = item[term];
            return <Item key={term} term={term} ocurrencies={ocurrencies} />;
          })}
        </ItemContainer>
      )}
    </View>
  );
};
export default TabOneScreen;
