import React from 'react';
import {TextInput, TextInputProps, View, ViewProps} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {IconProps} from '../models/Icon';
import Icons from './icons/Icons';

interface IInput extends TextInputProps, IconProps {
  iconStyles?: any;
  containerStyles?: any;
}

const Input = ({
  iconStyles,
  containerStyles,
  onChangeText,
  ...props
}: IInput) => {
  return (
    <View style={[styles.wrapper, containerStyles]}>
      <TextInput
        style={[styles.input, props.style]}
        onChangeText={onChangeText}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
      />
      <Icons
        iconName={props.iconName}
        iconHeight={props.iconHeight}
        iconWidth={props.iconWidth}
      />
    </View>
  );
};

const styles = EStyleSheet.create({
  wrapper: {
    borderBottomWidth: 1,
    borderColor: '$dark',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    paddingHorizontal: 0,
    height: 40,
    flex: 1,
    color: '$dark',
    fontSize: 18,
    fontFamily: '$mediumFont',
  },
});

export default Input;
