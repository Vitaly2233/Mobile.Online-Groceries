import {RouteProp, useRoute} from '@react-navigation/core';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import ProductList from '../../components/Lists/ProductList';
import {TabsParamList} from '../../models/TabsParamList';
import {useStore} from '../../store';

type BeveragesRouteProp = RouteProp<TabsParamList, 'Beverages'>;

const Beverages = () => {
  const {productStore} = useStore();
  const route = useRoute<BeveragesRouteProp>();
  if (!route.params) return null;
  const {categoryId} = route.params;
  if (!categoryId) return null;

  const data = productStore.products.filter(
    product => product.category === categoryId,
  );

  return (
    <ScrollView style={styles.container}>
      <ProductList data={data} />
    </ScrollView>
  );
};
const styles = EStyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: '$paddingTabs',
    backgroundColor: '$backgroundColor',
  },
});

export default Beverages;
