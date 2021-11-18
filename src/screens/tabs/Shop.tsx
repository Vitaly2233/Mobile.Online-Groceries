import React from 'react';
import {Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Input from '../../components/Input';
import Logo from '../../components/Logo';

export default function Shop() {
  return (
    <View style={styles.wrapper}>
      <Logo />
      <Input
        iconName={'search'}
        style={styles.input}
        containerStyles={styles.inputWrapper}
        placeholder={'Serch Store'}
        placeholderTextColor={styles.placeholderColor.color}
      />
    </View>
  );
}

const styles = EStyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '$backgroundColor',
    paddingHorizontal: '$paddingTabs',
  },
  inputWrapper: {
    height: 50,
    paddingHorizontal: 10,
    marginVertical: 20,
    flexDirection: 'row-reverse',
    borderBottomWidth: 0,
    backgroundColor: '#F2F3F2',
    borderRadius: 20,
  },

  input: {
    paddingLeft: 10,
    fontSize: 14,
  },

  placeholderColor: {color: '$gray'},
});
