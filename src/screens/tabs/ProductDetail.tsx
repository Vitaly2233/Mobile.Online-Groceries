import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, useRoute} from '@react-navigation/core';
import {observer} from 'mobx-react-lite';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Btn from '../../components/Btn';
import Icons from '../../components/icons/Icons';
import ProductCounter from '../../components/ProductCounter';
import ScaledItem from '../../components/ScaledItem';
import Stars from '../../components/Stars';
import {Product} from '../../models/Product';
import {useStore} from '../../store';
import Accordion from '../Accordion';

const ProductDetail = observer(() => {
  const route = useRoute();
  const product = route.params?.product as Product;

  const {productStore, offerStore} = useStore();
  const navigation = useNavigation();

  const [count, setCount] = useState<number>(offerStore.getCount(product.name));

  const isFavorite = productStore.favorite.includes(product._id);
  const picture = productStore.pictures[product._id];

  const handleMinusClick = () => {
    if (count === 1) return;
    else setCount(count - 1);
  };

  const handlePlusClick = () => {
    setCount(count + 1);
  };

  const handleAddToBacket = () => {
    offerStore.addChoosenProduct(product.name, count);
  };

  const handleFavoriteClick = async () => {
    if (isFavorite) {
      await productStore.deleteFavorite(product._id);
    } else {
      await productStore.addFavorite(product._id);
    }
  };

  let favoriteButtonColor = EStyleSheet.value('$gray');
  if (isFavorite) {
    favoriteButtonColor = 'red';
  }

  const imageStyle = [
    styles.imageStyle,
    {
      width:
        Dimensions.get('screen').width - EStyleSheet.value('$paddingTabs') * 2,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.previewContainer}>
        <View style={styles.topIcons}>
          <TouchableOpacity
            style={styles.goBackBtn}
            onPress={() => navigation.goBack()}>
            <Icons iconName={'arrow'} />
          </TouchableOpacity>
          <Icons iconName={'upload'} />
        </View>
        <Image
          source={{uri: `data:image/jpeg;base64,${picture}`}}
          resizeMode={'contain'}
          style={imageStyle}
        />
      </View>
      <ScrollView
        style={styles.infoWrapper}
        showsVerticalScrollIndicator={false}>
        <View style={styles.productInfo}>
          <View>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.characteristics}>
              {product.characteristics}
            </Text>
          </View>
          <ScaledItem onPress={handleFavoriteClick}>
            <Icons iconName={'Favourite'} fill={favoriteButtonColor} />
          </ScaledItem>
        </View>
        <View style={styles.cart}>
          <View style={styles.counterContainer}>
            <ProductCounter
              handleMinusClick={handleMinusClick}
              handlePlusClick={handlePlusClick}
              count={count}
            />
          </View>
          <Text style={styles.price}>
            ${(parseFloat(product.price) * count).toFixed(2)}
          </Text>
        </View>
        <Accordion title={'Product Detail'}>{product.details}</Accordion>
        <Accordion
          title={'Nutritions'}
          informationItem={
            <View
              style={{
                padding: 4,
                backgroundColor: '#EBEBEB',
                height: 22,
                borderRadius: 5,
              }}>
              <Text style={{color: EStyleSheet.value('$gray'), fontSize: 9}}>
                100gr
              </Text>
            </View>
          }>
          {product.details}
        </Accordion>
        <Accordion
          title={'Review'}
          informationItem={
            <View>
              <Stars />
            </View>
          }>
          {product.details}
        </Accordion>
        <View style={styles.buttomView}>
          <Btn
            onClick={handleAddToBacket}
            text={'Add To Basket'}
            textStyle={{color: '#FFF9FF'}}
          />
        </View>
      </ScrollView>
    </View>
  );
});

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$backgroundColor',
  },
  previewContainer: {
    backgroundColor: '$grayBackground',
    paddingHorizontal: '$paddingTabs',
    paddingTop: 15,
    paddingBottom: 30,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  topIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  goBackBtn: {
    height: 20,
    width: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  imageStyle: {
    height: 200,
    marginTop: 28,
  },
  infoWrapper: {
    flex: 1,
    paddingHorizontal: '$paddingTabs',
    paddingTop: 30,
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
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
  price: {color: '$mainDark', fontFamily: '$mediumFont', fontSize: 24},
  buttomView: {
    paddingBottom: 60,
  },
});

export default ProductDetail;
