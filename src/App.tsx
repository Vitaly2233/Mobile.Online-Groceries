import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {observer} from 'mobx-react-lite';
import * as React from 'react';
import {useEffect, useState} from 'react';
import {Platform, StatusBar, Text} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import EStyleSheet from 'react-native-extended-stylesheet';
import Auth from './screens/Auth';
import Onbording from './screens/Onbording';
import SignIn from './screens/SignIn';
import Home from './screens/tabs';
import {useStore} from './store';
import {api} from './config';
import ProductDetail from './screens/tabs/ProductDetail';
import Filters from './screens/tabs/Filter';
import Beverages from './screens/tabs/Beverages';

const Stack = createNativeStackNavigator();

StatusBar.setTranslucent(false);
StatusBar.setBarStyle('dark-content');

const App = observer(() => {
  const [isReady, setIsReady] = useState('');

  const themes = require('./themes.json');
  EStyleSheet.build(Platform.OS === 'android' ? themes.android : themes.ios);

  StatusBar.setBackgroundColor(EStyleSheet.value('$backgroundColor'));

  const {userStore, productStore} = useStore();
  const {token, setToken} = userStore;

  const init = async () => {
    const token = await AsyncStorage.getItem('token');
    const favorite = await AsyncStorage.getItem('favorite');

    if (favorite) {
      productStore.setFavorite(JSON.parse(favorite));
    }
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
            <Stack.Screen
              name="Filters"
              component={Filters}
              options={{
                presentation: 'modal',
                animation: 'slide_from_bottom',
                headerShadowVisible: false,
                headerShown: true,
                headerTitleAlign: 'center',
              }}
            />
            <Stack.Screen
              name={'Beverages'}
              component={Beverages}
              options={{
                presentation: 'modal',
                animation: 'slide_from_bottom',
                headerShadowVisible: false,
                headerShown: true,
                headerTitleAlign: 'center',
              }}
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
