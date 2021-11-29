import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icons from '../components/icons/Icons';
import {IconName} from '../models/Icon';

const ProfileAccordion = ({
  iconName,
  text,
  onPress,
}: {
  iconName: IconName;
  text: string;
  onPress: any;
}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        onPress(text);
      }}>
      <View style={styles.container}>
        <View style={styles.leftSide}>
          <Icons iconName={iconName} />
          <Text style={styles.text}>{text}</Text>
        </View>
        <View style={styles.rightSide}>
          <Icons iconName={'arrow'} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = EStyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '$lineColor',
    paddingVertical: 20,
    paddingHorizontal: '$paddingTabs',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftSide: {flexDirection: 'row'},
  text: {
    color: '$mainDark',
    fontFamily: '$mediumFont',
    fontSize: 18,
    marginLeft: 20,
  },
  rightSide: {
    transform: [{rotate: '180deg'}],
  },
});

export default ProfileAccordion;
