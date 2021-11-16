import React from 'react';
import {TextInput, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const Input = ({
  placeholder,
  onInputChange,
  onBlur,
  value,
  style,
  multiline = false,
}: {
  placeholder?: string;
  onInputChange?: any;
  onBlur?: any;
  value?: string;
  style?: any;
  multiline?: boolean;
}) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        onBlur={onBlur}
        value={value}
        onChangeText={onInputChange}
        style={[styles.input, {style}]}
        placeholder={placeholder}
        placeholderTextColor={'grey'}
        multiline={multiline}
        textAlignVertical={multiline ? 'top' : 'center'}
      />
    </View>
  );
};

const styles = EStyleSheet.create({
  wrapper: {
    borderBottomWidth: 1,
    borderColor: '$dark',
    justifyContent: 'center'
  },
  input: {
    color: '$dark',
    fontSize: 18,
    fontFamily: '$mediumFont',
  },
});

export default Input;
