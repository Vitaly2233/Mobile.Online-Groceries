import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function Btn({text, onClick, buttonStyle}: any) {
  return (
    <TouchableOpacity style={[styles.container, buttonStyle]} onPress={onClick}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = EStyleSheet.create({
  container: {
    height: 67,
    width: '100%',
    backgroundColor: '$lightGreen',
    justifyContent: 'center',
    borderRadius: 20
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: '$mediumFont',
  }
})