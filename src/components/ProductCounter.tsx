import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icons from './icons/Icons';

const ProductCounter = ({handleMinusClick, count, handlePlusClick}) => {
  return (
    <>
      <TouchableOpacity style={styles.functionalBtn} onPress={handleMinusClick}>
        <Icons iconName={'minus'} />
      </TouchableOpacity>
      <View style={styles.iconCounter}>
        <Text style={styles.countNumber}>{count}</Text>
      </View>
      <TouchableOpacity style={styles.functionalBtn} onPress={handlePlusClick}>
        <Icons iconName={'plus'} fill={EStyleSheet.value('$lightGreen')} />
      </TouchableOpacity>
    </>
  );
};

const styles = EStyleSheet.create({
  functionalBtn: {
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCounter: {
    borderWidth: 1,
    borderRadius: 17,
    borderColor: '$lineColor',
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countNumber: {color: '$mainDark', fontFamily: '$mediumFont', fontSize: 18},
});

export default ProductCounter;
