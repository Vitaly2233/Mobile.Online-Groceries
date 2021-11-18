import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icons from '../../components/icons/Icons';
import Account from './Account';
import Cart from './Cart';
import Explore from './Explore';
import Favourite from './Favourite';
import Shop from './Shop';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: styles.color.green,
        tabBarIcon: options => {
          const {size, focused} = options;
          return (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icons
                iconName={route.name}
                fill={focused ? styles.color.green : null}
                iconHeight={size}
                iconWidth={size}
              />
              <Text
                style={[
                  styles.labelText,
                  focused && {color: styles.color.green},
                ]}>
                {route.name}
              </Text>
            </View>
          );
        },
      })}>
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Favourite" component={Favourite} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}

const styles = EStyleSheet.create({
  color: {
    green: '$lightGreen',
  },

  tabBar: {
    borderTopWidth: 0,
    height: 80,
    justifyContent: 'space-evenly',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 0,
    position: 'absolute',
    botom: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },

  labelText: {
    color: '$mainDark',
    fontSize: 12,
    fontFamily: '$mediumFont',
  },
});
