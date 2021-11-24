import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {FlatList} from 'react-native';
import {useStore} from '../../store';
import CategoryCard from '../CategoryCard';

const CategoryList = () => {
  const {productStore} = useStore();
  const nabigation = useNavigation();

  const tabBarHeight = useBottomTabBarHeight();

  const handleCategoryPress = id => {
    nabigation.navigate('Beverages', {categoryId: id});
  };

  const renderItem = data => {
    const {_id, name} = data.item;
    return (
      <CategoryCard
        id={_id}
        name={name}
        onPress={() => handleCategoryPress(_id)}
      />
    );
  };

  return (
    <FlatList
      contentContainerStyle={{paddingBottom: tabBarHeight}}
      keyboardShouldPersistTaps={'always'}
      showsVerticalScrollIndicator={false}
      key={'#'}
      numColumns={2}
      data={productStore.categories}
      renderItem={renderItem}
    />
  );
};

export default CategoryList;
