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
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}
