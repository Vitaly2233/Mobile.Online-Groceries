import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {observer} from 'mobx-react';
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import ProductCard from '../ProductCard';

const ProductList = observer(
  ({data, isBottomTabBar = true}: {data: any; isBottomTabBar?: boolean}) => {
    const renderItem = data => {
      const product = data.item;

      return <ProductCard containerStyle={{marginBottom: 12}} {...product} />;
    };

    return (
      <FlatList
        contentContainerStyle={[
          isBottomTabBar ? {paddingBottom: useBottomTabBarHeight()} : {},
        ]}
        keyboardShouldPersistTaps={'always'}
        showsVerticalScrollIndicator={false}
        data={data}
        numColumns={2}
        key={'#'}
        renderItem={renderItem}></FlatList>
    );
  },
);

export default ProductList;
