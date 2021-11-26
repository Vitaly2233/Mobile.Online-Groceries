import React from 'react';
import {TextInput, TextInputProps, View, ViewProps} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {IconProps} from '../models/Icon';
import Icons from './icons/Icons';

interface IInput extends TextInputProps, IconProps {
  containerStyles?: any;
  ref?: any;
}

const Input = ({containerStyles, style, ...props}: IInput) => {
  return (
    <View style={[styles.wrapper, containerStyles]}>
      <TextInput style={[styles.input, style]} {...props} />
      <Icons {...props} />
    </View>
  );
};

const styles = EStyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: '100%',
    color: '$dark',
    fontSize: 18,
    fontFamily: '$mediumFont',
  },
});

export default Input;
