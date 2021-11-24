import {observer} from 'mobx-react-lite';
import React from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const Cart = observer(() => {
  return <View style={styles.container}></View>;
});

const styles = EStyleSheet.create({
  container: {flex: 1, backgroundColor: '$backgroundColor'},
});

export default Cart;
