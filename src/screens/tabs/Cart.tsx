import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {useRoute} from '@react-navigation/core';
import {toJS} from 'mobx';
import {observer} from 'mobx-react-lite';
import React, {useState} from 'react';
import {Dimensions, Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {computeProducts} from '../../actions/products';
import Btn from '../../components/Btn';
import CartList from '../../components/Lists/CartList';
import {useStore} from '../../store';
import Checkout from '../modal/Checkout';

const Cart = observer(() => {
  const tabBarHeight = useBottomTabBarHeight();
  const [isModalShown, setIsModalShown] = useState(false);

  const {products, generalPrice} = computeProducts();

  const handleClick = () => {
    setIsModalShown(!isModalShown);
  };

  const handleHide = () => {
    setIsModalShown(false);
  };

  return (
    <View style={styles.container}>
      <CartList
        data={products}
        containerStyle={{paddingBottom: tabBarHeight + 67}}
      />
      <Btn
        onClick={handleClick}
        text={'Go to Checkout'}
        additionalItem={
          <View style={styles.buttonContainer}>
            <Text>${generalPrice.toFixed(2)}</Text>
          </View>
        }
        containerStyle={[
          styles.button,
          {
            width:
              Dimensions.get('screen').width -
              EStyleSheet.value('$paddingTabs') * 2,
            bottom: 24 + tabBarHeight,
          },
        ]}
      />
      {isModalShown ? (
        <Checkout isVisible={isModalShown} handleHide={handleHide} />
      ) : null}
    </View>
  );
});

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$backgroundColor',
    paddingHorizontal: '$paddingTabs',
  },
  buttonContainer: {
    position: 'absolute',
    right: 20,
    padding: 2,
    borderRadius: 4,
    backgroundColor: '#489E67',
  },
  button: {
    marginLeft: '$paddingTabs',
    position: 'absolute',
  },
});

export default Cart;
