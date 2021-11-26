import React from 'react';
import {FlatList, View} from 'react-native';
import Icons from './icons/Icons';

const Stars = () => {
  return (
    <View style={{flexDirection: 'row', flex: 1}}>
      <Icons iconName={'Star'} />
      <Icons iconName={'Star'} />
      <Icons iconName={'Star'} />
      <Icons iconName={'Star'} />
      <Icons iconName={'Star'} />
    </View>
  );
};

export default Stars;
