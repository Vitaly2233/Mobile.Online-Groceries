import React from 'react';
import {Text, View} from 'react-native';

export default function Home({navigation, route}) {
  return (
    <View>
      <Text>{route.name}</Text>
    </View>
  );
}
