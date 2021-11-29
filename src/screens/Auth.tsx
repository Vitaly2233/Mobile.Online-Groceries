import React from 'react';
import {Dimensions, ImageBackground, StatusBar, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import LogInForm from '../components/LogInForm';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useRoute} from '@react-navigation/native';
import SignUpForm from '../components/SignUpForm';

export default function Auth() {
  const route = useRoute<any>();
  const background = require('../assets/img/BackgroundBlur.png');

  return (
    <ImageBackground
      style={[
        styles.wrapper,
        {height: Dimensions.get('window').height + StatusBar.currentHeight},
      ]}
      source={background}
      resizeMode={'stretch'}>
      <StatusBar translucent backgroundColor="transparent" />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'always'}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: EStyleSheet.value('$paddingHorizontal'),
        }}>
        {route.params?.showLogin ? <LogInForm /> : <SignUpForm />}
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
}

const styles = EStyleSheet.create({
  wrapper: {},
});
