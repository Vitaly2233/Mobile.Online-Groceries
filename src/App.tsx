import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {useEffect} from 'react';
import {Platform, StatusBar} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import EStyleSheet from 'react-native-extended-stylesheet';
import LogIn from './screens/LogIn';
import Onbording from './screens/Onbording';
import SelectLocation from './screens/SelectLocation';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Home from './screens/tabs';

const Stack = createNativeStackNavigator();

export default function App() {
  const themes = require('./themes.json');
  EStyleSheet.build(Platform.OS === 'android' ? themes.android : themes.ios);

  return (
    <NavigationContainer onReady={() => RNBootSplash.hide({fade: true})}>
      <Stack.Navigator
        initialRouteName={'LogIn'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SelectLocation" component={SelectLocation} />
        <Stack.Screen name="Onbording" component={Onbording} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
