import {useRoute} from '@react-navigation/core';
import {toJS} from 'mobx';
import {observer} from 'mobx-react-lite';
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useStore} from '../store';
import ProductCard from './ProductCard';

const ProductSectionList = observer(() => {
  const {productStore} = useStore();

  const products = productStore.products;
  const productTypes = [...new Set(productStore.products.map(product => product.type))];

  const renderCards = (data: any) => {
    const product = data.item;
    const index = data.index;
    if (index === 0) {
      return (
        <ProductCard
          {...product}
          containerStyle={{marginLeft: EStyleSheet.value('$paddingTabs')}}
        />
      );
    }
    return <ProductCard {...product} />;
  };

  const renderItem = (data: any) => {
    const productType = data.item;
    const productsByType = products.filter(
      product => product.type === productType,
    );

    return (
      <View style={styles.container}>
        <View style={styles.typeContainer}>
          <Text style={styles.typeText}>{productType}</Text>
          <Text style={styles.seeAllLink}>See all</Text>
        </View>
        <FlatList
          renderItem={renderCards}
          data={productsByType}
          style={styles.cardContainer}
          horizontal={true}
          scrollEnabled={true}
        />
      </View>
    );
  };
  return <FlatList renderItem={renderItem} data={productTypes} />;
});

const styles = EStyleSheet.create({
  container: {marginTop: 30},
  typeContainer: {
    marginBottom: 20,
    marginHorizontal: '$paddingTabs',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardContainer: {
    flexDirection: 'row',
  },
  typeText: {
    fontSize: 24,
    fontFamily: '$mediumFont',
    color: '$mainDark',
  },
  seeAllLink: {color: '$lightGreen', fontSize: 16, fontFamily: '$mediumFont'},
});

export default ProductSectionList;
