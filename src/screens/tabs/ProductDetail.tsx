import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, useRoute} from '@react-navigation/core';
import {observer} from 'mobx-react-lite';
import React, {useState} from 'react';
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
import ScaledItem from '../../components/ScaledItem';
import {Product} from '../../models/Product';
import {useStore} from '../../store';
import Accordion from '../Accordion';

const ProductDetail = observer(() => {
  const {productStore, offerStore: cartStore} = useStore();
  const route = useRoute();
  const navigation = useNavigation();
  const [count, setCount] = useState(1);

  const product = route.params?.product as Product;
  const picture = productStore.pictures[product._id];

  const handleMinusClick = () => {
    if (count === 1) return;
    else setCount(count - 1);
  };

  const handlePlusClick = () => {
    setCount(count + 1);
  };

  const handleAddToBacket = () => {
    cartStore.setChoosenProducts(product._id, count);
    setCount(1);
  };

  const handleFavoriteClick = async () => {
    if (productStore.favorite.includes(product._id)) {
      productStore.setFavorite([productStore.favorite]);
      await AsyncStorage.setItem(
        'favorite',
        JSON.stringify([productStore.favorite]),
      );
    } else {
      productStore.setFavorite([productStore.favorite, product._id]);
      await AsyncStorage.setItem(
        'favorite',
        JSON.stringify([productStore.favorite, product._id]),
      );
    }
  };

  let favoriteButtonColor = EStyleSheet.value('$gray');
  if (productStore.favorite && productStore.favorite.includes(product._id)) {
    favoriteButtonColor = EStyleSheet.value('red');
  }

  return (
    <View style={styles.container}>
      <View style={styles.previewContainer}>
        <View style={styles.topIcons}>
          <TouchableOpacity
            style={{
              height: 20,
              width: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => navigation.goBack()}>
            <Icons iconName={'arrow'} />
          </TouchableOpacity>
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
            <TouchableOpacity
              style={{
                height: 45,
                width: 45,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={handleMinusClick}>
              <Icons iconName={'minus'} />
            </TouchableOpacity>
            <View style={styles.iconCounter}>
              <Text style={styles.countNumber}>{count}</Text>
            </View>
            <TouchableOpacity
              style={{
                height: 45,
                width: 45,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={handlePlusClick}>
              <Icons
                iconName={'plus'}
                fill={EStyleSheet.value('$lightGreen')}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.price}>
            ${(parseFloat(product.price) * count).toFixed(2)}
          </Text>
        </View>
        <Accordion title={'Product Detail'}>{product.details}</Accordion>
        <Accordion title={'Nutritions'}>{product.details}</Accordion>
        <Accordion title={'Review'}>{product.details}</Accordion>
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
  iconCounter: {
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
  buttomView: {
    paddingBottom: 60,
  },
});

export default ProductDetail;
