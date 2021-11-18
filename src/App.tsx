import {NavigationContainer, useFocusEffect} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {toJS} from 'mobx';
import {observer} from 'mobx-react-lite';
import * as React from 'react';
import {useEffect} from 'react';
import {Platform, StatusBar} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import EStyleSheet from 'react-native-extended-stylesheet';
import Auth from './screens/Auth';
import Onbording from './screens/Onbording';
import SignIn from './screens/SignIn';
import Home from './screens/tabs';
import {useStore} from './store';

const Stack = createNativeStackNavigator();

StatusBar.setTranslucent(true)
StatusBar.setBackgroundColor('transparent')
StatusBar.setBarStyle('dark-content')

const App = observer(() => {
  const {userStore} = useStore();
  const isSignedIn = toJS(userStore.isSignedIn);
  const {token, setToken} = userStore;
  const themes = require('./themes.json');
  EStyleSheet.build(Platform.OS === 'android' ? themes.android : themes.ios);

  const init = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      setToken(token);
    }
  };

  useEffect(() => {
    init();
  });

  // useFocusEffect(
  //   React.useCallback(() => {
  //     let isActive = true;

  //     init();

  //     return () => {
  //       isActive = false;
  //     };
  //   }, []),
  // );
  
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide({fade: true})}>
      <Stack.Navigator
        initialRouteName={'LogIn'}
        screenOptions={{
          animation: 'slide_from_left',
          headerShown: false,
        }}>
        {token ? (
          <>
            <Stack.Screen name="Home" component={Home} />
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
