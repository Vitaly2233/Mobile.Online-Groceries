import React from 'react';
import {TouchableOpacity, Text, ViewStyle, TextStyle} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icons from './icons/Icons';
interface IProps {
  text?: string;
  onClick?: any;
  containerStyle?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle;
  additionalItem?: any;
}

export default function Btn({
  text,
  onClick,
  containerStyle,
  textStyle,
  additionalItem,
}: IProps) {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onClick}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
      {additionalItem ? additionalItem : null}
    </TouchableOpacity>
  );
}

const styles = EStyleSheet.create({
  container: {
    height: 67,
    width: '100%',
    backgroundColor: '$lightGreen',
    justifyContent: 'center',
    borderRadius: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: '#FFF9FF',
    fontFamily: '$mediumFont',
  },
});
