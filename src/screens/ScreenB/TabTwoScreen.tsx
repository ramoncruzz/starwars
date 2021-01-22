import React, { useEffect } from 'react';
import { View } from '../../../components/Themed';
import styles from './styles';
import useStarWars from '../../hooks/useStarWars';
import { findOcurrencies } from '../../utils/functions';

const TabTwoScreen = () => {
  const { peopleList } = useStarWars();
  useEffect(() => {
    const teste = peopleList;
    const ocurrencies = findOcurrencies(
      'Atirei o pau no gato, mas o gato não morreu.'
    );
    debugger;
  }, [peopleList]);
  return <View style={styles.container}></View>;
};
export default TabTwoScreen;
