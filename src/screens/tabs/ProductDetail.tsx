import {useRoute} from '@react-navigation/core';
import React from 'react';
import {Dimensions, Image, StatusBar, Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icons from '../../components/icons/Icons';
import {Product} from '../../models/Product';
import {useStore} from '../../store';

const ProductDetail = () => {
  const {productStore} = useStore();
  const route = useRoute();
  const product = route.params?.product as Product;

  const count = 1;

  const picture = productStore.pictures[product._id];
  return (
    <View style={styles.container}>
      <View style={styles.previewContainer}>
        <View style={styles.topIcons}>
          <Icons iconName={'arrow'} />
          <Icons iconName={'upload'} />
        </View>
        <Image
          source={{uri: `data:image/jpeg;base64,${picture}`}}
          resizeMode={'contain'}
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.infoWrapper}>
        <View style={styles.productInfo}>
          <View style={styles.description}>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.characteristics}>
              {product.characteristics}
            </Text>
          </View>
          <Icons iconName={'Favourite'} />
        </View>
        <View style={styles.cart}>
          <View style={styles.counterContainer}>
            <Icons iconName={'minus'} />
            <View style={styles.iconCounter}>
              <Text style={styles.countNumber}>{count}</Text>
            </View>
            <Icons iconName={'plus'} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$backgroundColor',
  },
  previewContainer: {
    backgroundColor: '$grayBackground',
    paddingHorizontal: '$paddingTabs',
    paddingTop: StatusBar.currentHeight,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  topIcons: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageStyle: {
    height: 200,
    marginTop: 28,
    width:
      Dimensions.get('screen').width - EStyleSheet.value('$paddingTabs') * 2,
  },
  infoWrapper: {marginTop: 30, paddingHorizontal: '$paddingTabs'},

  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  description: {},
  name: {fontfamily: '$mediumFont', color: '$mainDark', fontSize: 24},
  characteristics: {fontfamily: '$regularFont', color: '$gray', fontSize: 16},
  cart: {},
  counterContainer: {},
  iconCounter: {},
  countNumber: {},
});

export default ProductDetail;
