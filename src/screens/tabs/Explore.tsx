import {useNavigation, useRoute} from '@react-navigation/core';
import {observer} from 'mobx-react-lite';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {getAllCategories} from '../../actions/products';
import Icons from '../../components/icons/Icons';
import CategoryList from '../../components/Lists/CategoryList';
import ProductList from '../../components/Lists/ProductList';
import Search from '../../components/Search';
import {useStore} from '../../store';

const Explore = observer(() => {
  const navigation = useNavigation();
  const {productStore} = useStore();

  const [isLoading, setIsLoading] = useState(true);
  const [isProductShown, setIsProductShown] = useState<boolean>();

  const productData = productStore.filterProducts;

  const init = async () => {
    await getAllCategories();
    setIsLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  const handleOnFocus = () => {
    navigation.setOptions({headerShown: false});
    setIsProductShown(true);
  };

  const handleTextChange = (text: string) => {
    if (text.length < 1) {
      navigation.setOptions({headerShown: true});
      setIsProductShown(false);
    } else {
      navigation.setOptions({headerShown: false});
      setIsProductShown(true);
      productStore.setSearchInput(text);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View
          style={[
            styles.topBar,
            isProductShown
              ? {marginLeft: EStyleSheet.value('$paddingTabs') * 2}
              : {},
          ]}>
          <Search
            onFocus={handleOnFocus}
            onChangeText={handleTextChange}
            autoFocus={false}
            containerStyles={[isProductShown ? {marginLeft: 20} : {}]}
          />
          {isProductShown ? (
            <TouchableOpacity onPress={() => navigation.navigate('Filters')}>
              <Icons iconName={'filter'} iconHeight={25} iconWidth={25} />
            </TouchableOpacity>
          ) : null}
        </View>
        {isLoading ? (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : isProductShown ? (
          <ProductList data={productData} />
        ) : (
          <CategoryList />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
});

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$backgroundColor',
    paddingHorizontal: '$paddingTabs',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default Explore;
