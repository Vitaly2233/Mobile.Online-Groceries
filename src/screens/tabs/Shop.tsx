import {observer} from 'mobx-react-lite';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, View} from 'react-native';
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
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <Logo />
      <Search
        containerStyles={{marginHorizontal: EStyleSheet.value('$paddingTabs')}}
      />
      {isLoading ? (
        <View style={{backgroundColor: 'red'}}>
          <ActivityIndicator size="large" color="green" />
        </View>
      ) : (
        <View>
          <BannerList />
          <ProductSectionList />
          <GroceriesList />
          <View style={{height: 100}} />
        </View>
      )}
    </ScrollView>
  );
});

const styles = EStyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '$backgroundColor',
  },
});

export default Shop;
