import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Account from './Account';
import Cart from './Cart';
import Explore from './Explore';
import Favorite from './Favorite';
import Shop from './Shop';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="shop" component={Shop} />
      <Tab.Screen name="explore" component={Explore} />
      <Tab.Screen name="cart" component={Cart} />
      <Tab.Screen name="favorite" component={Favorite} />
      <Tab.Screen name="account" component={Account} />
    </Tab.Navigator>
  );
}
