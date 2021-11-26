import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  BackHandler,
  Image,
  ImageBackground,
  StatusBar,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Btn from '../components/Btn';

const OrderAccepted = () => {
  const navigation = useNavigation();
  const background = require('../assets/img/BackgroundBlur.png');
  const check = require('../assets/img/CircleCheck.png');

  const quit = () => {
    StatusBar.setHidden(false);
    StatusBar.setTranslucent(false);
    navigation.navigate('Shop');
  };

  BackHandler.addEventListener('hardwareBackPress', () => {
    quit();
    return false;
  });

  return (
    <ImageBackground
      style={styles.wrapper}
      source={background}
      resizeMode={'stretch'}>
      <View style={styles.container}>
        <Image style={{width: 270, height: 240}} source={check} />
        <Text style={styles.title}>Your Order has been{'\n'} accepted</Text>
        <Text style={styles.description}>
          Your items has been placcd and is on{'\n'}it’s way to being processed
        </Text>
        <Btn text={'Track Order'} />
        <TouchableWithoutFeedback onPress={quit}>
          <View style={styles.bottomTextContainer}>
            <Text style={styles.bottomText}>Back to home</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </ImageBackground>
  );
};

const styles = EStyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: '$paddingHorizontal',
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    marginTop: 40,
    textAlign: 'center',
    color: '$mainDark',
    fontFamily: '$mediumFont',
    fontSize: 28,
  },
  description: {
    color: '$gray',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 80,
  },
  bottomTextContainer: {paddingVertical: 25},
  bottomText: {
    color: '$mainDark',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: '$regularFont',
  },
});

export default OrderAccepted;
