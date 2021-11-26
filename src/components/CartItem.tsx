import {useNavigation} from '@react-navigation/core';
import {observer} from 'mobx-react-lite';
import React from 'react';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Product} from '../models/Product';
import {useStore} from '../store';
import Icons from './icons/Icons';
import ProductCounter from './ProductCounter';

interface IProps {
  product: Product & {count: number};
  minusClick: any;
  plusClick: any;
  base64Image: string;
  showCounter?: boolean;
}

const CartItem = observer(
  ({product, minusClick, plusClick, base64Image, showCounter}: IProps) => {
    const navigation = useNavigation();
    const {offerStore} = useStore();
    const handlePress = () => {
      navigation.navigate('ProductDetail', {product});
    };

    const handleXClick = async () => {
      await offerStore.delteOffer(product.name);
    };

    return (
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}>
          <Image
            resizeMode={'contain'}
            source={{uri: `data:image/jpeg;base64,${base64Image}`}}
            style={{height: 80, width: 80}}
          />
          <View
            style={[
              {flex: 1, marginLeft: 15},
              !showCounter ? {justifyContent: 'center'} : {},
            ]}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.characteristics}>
              {product.characteristics}
            </Text>
            {showCounter ? (
              <View style={{flexDirection: 'row'}}>
                <ProductCounter
                  handleMinusClick={() => {
                    minusClick(product.name);
                  }}
                  handlePlusClick={() => {
                    plusClick(product.name);
                  }}
                  count={product.count}
                />
              </View>
            ) : null}
          </View>
          <View
            style={[
              {
                justifyContent: 'flex-end',
                alignItems: 'center',
                paddingVertical: 5,
              },
              !showCounter ? {justifyContent: 'center'} : {},
            ]}>
            {showCounter ? (
              <>
                <TouchableWithoutFeedback onPress={handleXClick}>
                  <View style={styles.iconContainer}>
                    <Icons iconName={'XIcon'} />
                  </View>
                </TouchableWithoutFeedback>
                <Text style={styles.price}>
                  ${(parseFloat(product.price) * product.count).toFixed(2)}
                </Text>
              </>
            ) : (
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.price}>${parseFloat(product.price)}</Text>
                <View style={{transform: [{rotate: '180deg'}]}}>
                  <Icons iconName={'arrow'} />
                </View>
              </View>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  },
);

const styles = EStyleSheet.create({
  container: {
    paddingVertical: 30,
    borderBottomWidth: 1,
    flexDirection: 'row',
    borderColor: '$lineColor',
  },
  productName: {color: '$mainDark', fontStyle: '$mediumFont', fontSize: 16},
  characteristics: {fontSize: 14, color: '$gray', marginBottom: 10},
  iconContainer: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  price: {
    fontFamily: '$mediumFont',
    color: '$mainDark',
    fontSize: 18,
    marginRight: 15,
  },
});

export default CartItem;
