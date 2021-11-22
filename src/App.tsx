import {NavigationContainer, useFocusEffect} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {observer} from 'mobx-react-lite';
import * as React from 'react';
import {useEffect, useState} from 'react';
import {Platform, StatusBar} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import EStyleSheet from 'react-native-extended-stylesheet';
import Auth from './screens/Auth';
import Onbording from './screens/Onbording';
import SignIn from './screens/SignIn';
import Home from './screens/tabs';
import {useStore} from './store';
import {api} from './config';
import ProductDetail from './screens/tabs/ProductDetail';

const Stack = createNativeStackNavigator();

StatusBar.setTranslucent(true);
StatusBar.setBackgroundColor('transparent');
StatusBar.setBarStyle('dark-content');

const App = observer(() => {
  const themes = require('./themes.json');
  EStyleSheet.build(Platform.OS === 'android' ? themes.android : themes.ios);
  const [isReady, setIsReady] = useState('');

  const {userStore} = useStore();
  const {token, setToken} = userStore;

  const init = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      setToken(token);
      api.defaults.headers.common = {Authorization: `Bearer ${token}`};
      setIsReady('Home');
    }
    RNBootSplash.hide({fade: true});
  };

  useEffect(() => {
    init();
  });

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isReady}
        screenOptions={{
          animation: 'slide_from_right',
          headerShown: false,
        }}>
        {token ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
              options={{animation: 'slide_from_bottom'}}
              name="ProductDetail"
              component={ProductDetail}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="LogIn"
              component={Auth}
              initialParams={{showLogin: true}}
            />
            <Stack.Screen name="Onbording" component={Onbording} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen
              name="SignUp"
              component={Auth}
              initialParams={{showLogin: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default App;
