import React, { useState } from 'react';
import { FlatList, SafeAreaView, ActivityIndicator, View } from 'react-native';
import styles from './styles';
import Item from '../../../components/Item';
import useStarWars from '../../hooks/useStarWars';

const TabTwoScreen = () => {
  const { peopleList, removePerson, nextPage, isLoading } = useStarWars();
  const [page, setPage] = useState<number>(1);
  return (
    <SafeAreaView style={styles.container}>
      {isLoading && (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator size="large" />
        </View>
      )}
      {!isLoading && (
        <FlatList
          style={{ width: '100%', flex: 1, alignSelf: 'center' }}
          data={peopleList}
          extraData={peopleList.length}
          renderItem={({ item, index }) => (
            <Item
              person={item}
              key={index}
              onDelete={() => removePerson(index)}
            />
          )}
          keyExtractor={(item) => item.name}
          onEndReachedThreshold={0.1}
          onEndReached={() => {
            setPage(page + 1);
            nextPage(page + 1);
          }}
        />
      )}
    </SafeAreaView>
  );
};
export default TabTwoScreen;
