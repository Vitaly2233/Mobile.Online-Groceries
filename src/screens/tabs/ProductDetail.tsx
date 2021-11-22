import {useRoute} from '@react-navigation/core';
import React from 'react';
import {Dimensions, Image, StatusBar, Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Btn from '../../components/Btn';
import Icons from '../../components/icons/Icons';
import {Product} from '../../models/Product';
import {useStore} from '../../store';
import Accordion from '../Accordion';

const ProductDetail = () => {
  const {productStore} = useStore();
  const route = useRoute();

  const product = route.params?.product as Product;
  const picture = productStore.pictures[product._id];

  const count = 1;

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
          style={[
            styles.imageStyle,
            {
              width:
                Dimensions.get('screen').width -
                EStyleSheet.value('$paddingTabs') * 2,
            },
          ]}
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
          <Icons iconName={'Favourite'} fill={EStyleSheet.value('$gray')} />
        </View>
        <View style={styles.cart}>
          <View style={styles.counterContainer}>
            <Icons iconName={'minus'} />
            <View style={styles.iconCounter}>
              <Text style={styles.countNumber}>{count}</Text>
            </View>
            <Icons iconName={'plus'} fill={EStyleSheet.value('$lightGreen')} />
          </View>
          <Text style={styles.price}>${product.price}</Text>
        </View>
        <Accordion title={'Product Detail'}>{product.details}</Accordion>
        <Accordion title={'Nutritions'}>{product.details}</Accordion>
        <Accordion title={'Review'}>{product.details}</Accordion>
      </View>
      <Btn
        text={'Add To Basket'}
        textStyle={{color: '#FFF9FF'}}
        buttonStyle={{
          position: 'absolute',
          bottom: 0,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
      />
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
  },
  infoWrapper: {marginTop: 30, paddingHorizontal: '$paddingTabs'},

  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  description: {},
  name: {fontFamily: '$mediumFont', color: '$mainDark', fontSize: 24},
  characteristics: {fontFamily: '$regularFont', color: '$gray', fontSize: 16},
  cart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 30,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCounter: {
    marginHorizontal: 20,
    borderWidth: 1,
    borderRadius: 17,
    borderColor: '$lineColor',
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countNumber: {color: '$mainDark', fontFamily: '$mediumFont', fontSize: 18},
  price: {color: '$mainDark', fontFamily: '$mediumFont', fontSize: 24},
});

export default ProductDetail;
