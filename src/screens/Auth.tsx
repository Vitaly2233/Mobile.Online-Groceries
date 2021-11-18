import React from 'react';
import {Dimensions, ImageBackground, StatusBar, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import LogInForm from '../components/LogInForm';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useRoute} from '@react-navigation/native';
import SignUpForm from '../components/SignUpForm';
import Icons from '../components/icons/Icons';

export default function Auth() {
  const route = useRoute<any>();
  const background = require('../assets/img/BackgroundBlur.png');

  return (
    <KeyboardAwareScrollView
      style={{flex: 1, height: Dimensions.get('screen').height}}>
      <ImageBackground
        style={styles.wrapper}
        source={background}
        resizeMode={'stretch'}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.carrotContainer}>
          <Icons iconName={'colorCarrot'} />
        </View>
        {route.params?.showLogin ? <LogInForm /> : <SignUpForm />}
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
}

const styles = EStyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: '$paddingHorizontal',
    paddingVertical: 55,
    backgroundColor: '$backgroundColor',
  },
  carrotContainer: {
    marginBottom: 80,
    alignSelf: 'center',
  },
});
