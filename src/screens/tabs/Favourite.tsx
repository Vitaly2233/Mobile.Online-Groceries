import {useFocusEffect, useRoute} from '@react-navigation/core';
import {observer} from 'mobx-react-lite';
import React, {useState} from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import CartList from '../../components/Lists/CartList';
import {useStore} from '../../store';
import OrderFailed from '../modal/OrderFailed';

const Favourite = observer(() => {
  const {productStore} = useStore();
  const route = useRoute() as any;
  const [showFail, setShowFail] = useState(false);

  useFocusEffect(() => {
    setShowFail(route.params?.showFail);
  });
  
  return (
    <View style={styles.container}>
      <CartList data={productStore.favoriteProducts} showCounter={false} />
      <OrderFailed
        showModal={showFail}
        handleHide={() => {
          route.params = {};

          setShowFail(false);
        }}
      />
    </View>
  );
});

export default Favourite;

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$backgroundColor',
    flex: 1,
    paddingHorizontal: '$paddingTabs',
  },
});
