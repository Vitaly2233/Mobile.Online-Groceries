import React from 'react';
import {
  Image,
  ImageBackground,
  StatusBar,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import LogInForm from '../components/LogInForm';
import Icon from '../components/icons/Icon';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function LogIn({navigation}) {
  const background = require('../assets/img/BackgroundBlur.png');
  return (
    <KeyboardAwareScrollView>
      <ImageBackground
        style={styles.wrapper}
        source={background}
        resizeMode={'stretch'}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.carrotContainer}>
          <Icon iconName={'colorCarrot'} />
        </View>
        <LogInForm navigation={navigation} />
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
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
