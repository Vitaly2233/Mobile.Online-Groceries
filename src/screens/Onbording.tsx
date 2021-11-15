import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icons from '../assets/icons';

export default function Onbording({navigation, route}) {
  return (
    <ImageBackground
      style={styles.image}
      source={require('../assets/img/Man.png')}
      resizeMode="cover">
      <StatusBar translucent backgroundColor="transparent" />
      <Icons iconName={'carrot'} />
      <Text style={styles.mainText}>Welcome{'\n'}to our store</Text>
      <Text style={styles.transparentText}>
        Get your groceries in as fast as one hour
      </Text>
      <TouchableOpacity />
    </ImageBackground>
  );
}

const styles = EStyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 90,
  },
  mainText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 48,
  },
  transparentText: {
    color: 'rgba(255, 255, 255, 0.5)',
  },
});
