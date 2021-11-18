import React from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icons from './icons/Icons';

const Logo = () => {
  return (
    <View style={styles.wrapper}>
      <Icons iconName={'colorCarrot'} iconHeight={30} iconWidth={26} />
      <Icons iconName={'logoName'} />
    </View>
  );
};

const styles = EStyleSheet.create({
  wrapper: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Logo;
