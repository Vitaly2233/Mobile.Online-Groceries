import {observer} from 'mobx-react';
import React, {useEffect} from 'react';
import {FlatList, ViewProps, ViewStyle} from 'react-native';
import {useStore} from '../../store';
import CartItem from '../CartItem';

interface IProps {
  data: any;
  showCounter?: boolean;
  containerStyle?: ViewStyle | ViewStyle[];
}

const CartList = observer(
  ({data, showCounter = true, containerStyle}: IProps) => {
    const {productStore, offerStore} = useStore();

    const handleMinusClick = async name => {
      await offerStore.decrementProductCount(name);
    };

    const handlePlusClick = async name => {
      await offerStore.incrementProductCount(name);
    };

    const renderItem = data => {
      const product = data.item;

      if (!product) return null;
      const image = productStore.pictures[product._id];

      return (
        <CartItem
          base64Image={image}
          minusClick={handleMinusClick}
          plusClick={handlePlusClick}
          product={product}
          showCounter={showCounter}
        />
      );
    };

    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        contentContainerStyle={[containerStyle]}
      />
    );
  },
);

export default CartList;
