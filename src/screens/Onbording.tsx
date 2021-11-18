import React from 'react';
import {Text, ImageBackground, StatusBar} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

// components
import Btn from '../components/Btn';
import Icon from '../components/icons/Icons';

const man = require('../assets/img/Man.png');

const Onbording = () => {
  return (
    <ImageBackground style={styles.image} source={man} resizeMode="cover">
      <StatusBar translucent backgroundColor="transparent" />
      <Icon iconName={'carrot'} />
      <Text style={styles.mainText}>Welcome{'\n'}to our store</Text>
      <Text style={styles.transparentText}>
        Get your groceries in as fast as one hour
      </Text>
      <Btn text={'Get Started'}/>
    </ImageBackground>
  );
};

const styles = EStyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 90,
    paddingHorizontal: '$paddingHorizontal',
  },
  mainText: {
    color: '#fff',
    fontFamily: '$mediumFont',
    letterSpacing: 0.1,
    textAlign: 'center',
    fontSize: 48,
  },
  transparentText: {
    color: '$lightGray',
    fontSize: 16,
    fontFamily: '$regularFont',
    marginBottom: 30,
  },
});

export default Onbording;
