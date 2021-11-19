import {useNavigation} from '@react-navigation/core';
import {observer} from 'mobx-react-lite';
import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Product} from '../models/Product';
import {useStore} from '../store';
import Icons from './icons/Icons';

const ProductCard = observer(
  (product: Product & {containerStyle: ViewStyle}) => {
    const {name, characteristics, price, _id, containerStyle} = product;
    const {productStore} = useStore();
    const navigation = useNavigation();

    const handlePress = () => {
      navigation.navigate('ProductDetail', {product});
    };

    const picture = productStore.pictures[_id];

    return (
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={[styles.container, containerStyle]}>
          {picture ? (
            <Image
              source={{uri: `data:image/jpeg;base64,${picture}`}}
              resizeMode={'contain'}
              style={{height: 80, width: 120, marginBottom: 25}}
            />
          ) : null}
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{characteristics}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <Text style={styles.price}>${price}</Text>
            <TouchableOpacity style={styles.addBtn}>
              <Icons iconName={'plus'} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  },
);

const styles = EStyleSheet.create({
  container: {
    height: 250,
    width: 170,
    borderWidth: 1,
    borderRadius: 20,
    padding: 15,
    marginRight: 15,
    borderColor: '$lineColor',
  },
  title: {
    fontSize: 16,
    fontFamily: '$mediumFont',
    color: '$mainDark',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: '$regularFont',
    color: '$gray',
  },
  wrapper: {
    flexDireciton: 'row',
    justifyContent: 'center',
  },
  price: {
    fontSize: 18,
    fontFamily: '$mediumFont',
    color: '$mainDark',
  },
  addBtn: {
    height: 45,
    width: 45,
    backgroundColor: '$lightGreen',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});

export default ProductCard;
