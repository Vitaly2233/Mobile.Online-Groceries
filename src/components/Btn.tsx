import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function Btn({text}) {
  return (
    <TouchableOpacity>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = EStyleSheet.create({
  
})