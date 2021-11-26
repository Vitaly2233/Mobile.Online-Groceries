import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {observer} from 'mobx-react-lite';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {getAllProducts} from '../../actions/products';
import BannerList from '../../components/Lists/BannerList';
import GroceriesList from '../../components/Lists/GroceriesList';
import ProductSectionList from '../../components/Lists/ProductSectionList';
import Logo from '../../components/Logo';
import Search from '../../components/Search';

const Shop = observer(() => {
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = async () => {
    await getAllProducts();
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <View style={[styles.wrapper, {paddingBottom: useBottomTabBarHeight()}]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Logo />
        <View style={{paddingHorizontal: EStyleSheet.value('$paddingTabs')}}>
          <Search />
        </View>

        {!isLoading ? (
          <>
            <BannerList />
            <ProductSectionList />
            <GroceriesList />
          </>
        ) : null}
      </ScrollView>
      {isLoading ? (
        <View style={{flex: 1}}>
          <ActivityIndicator size="large" color="green" />
        </View>
      ) : null}
    </View>
  );
});

const styles = EStyleSheet.create({
  wrapper: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: '$backgroundColor',
    paddingBottom: 100,
  },
});

export default Shop;
