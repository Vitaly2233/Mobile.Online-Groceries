import React from 'react';
import {TextInput, TextInputProps, ViewStyle} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Input from './Input';

interface IInput extends TextInputProps {
  containerStyles?: ViewStyle | ViewStyle[];
}

const Search = ({containerStyles, ...props}: IInput) => {
  return (
    <Input
      iconName={'search'}
      autoFocus={false}
      style={styles.input}
      containerStyles={[styles.inputWrapper, containerStyles]}
      placeholder={'Serch Store'}
      placeholderTextColor={EStyleSheet.value('$gray')}
      {...props}
    />
  );
};

const styles = EStyleSheet.create({
  inputWrapper: {
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
    marginVertical: 20,
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    backgroundColor: '$grayBackground',
    borderRadius: 20,
  },
  input: {
    flex: 1,
    color: '$dark',
    paddingLeft: 10,
    fontSize: 14,
  },
});

export default Search;
