import {observer} from 'mobx-react-lite';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {ProductsByType} from '../../actions/products';
import BannerList from '../../components/BannerList';
import Input from '../../components/Input';
import Logo from '../../components/Logo';
import ProductSectionList from '../../components/ProductSectionList';

const Shop = observer(() => {
  const fetchProducts = async () => {
    await ProductsByType('Exclusive Offer');
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <View style={styles.wrapper}>
      <Logo />
      <Input
        iconName={'search'}
        style={styles.input}
        containerStyles={styles.inputWrapper}
        placeholder={'Serch Store'}
        placeholderTextColor={styles.placeholderColor.color}
      />
      <BannerList />
      <ProductSectionList />
    </View>
  );
});

const styles = EStyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '$backgroundColor',
  },
  inputWrapper: {
    height: 50,
    paddingHorizontal: 10,
    marginVertical: 20,
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    marginHorizontal: '$paddingTabs',
    borderBottomWidth: 0,
    backgroundColor: '$grayBackground',
    borderRadius: 20,
  },

  input: {
    paddingLeft: 10,
    fontSize: 14,
  },

  placeholderColor: {color: '$gray'},
});

export default Shop;
