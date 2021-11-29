import AsyncStorage from '@react-native-async-storage/async-storage';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Btn from '../../components/Btn';
import Icons from '../../components/icons/Icons';
import ProfileHeader from '../../components/ProfileHeader';
import {useStore} from '../../store';
import ProfileAccordion from '../ProfileAccordion';

const items: any = [
  {
    id: 1,
    iconName: 'Shop',
    text: 'example',
  },
  {
    id: 2,
    iconName: 'Shop',
    text: 'example',
  },
  {
    id: 3,
    iconName: 'Shop',
    text: 'example',
  },
  {
    id: 4,
    iconName: 'Shop',
    text: 'example',
  },
];

const Account = () => {
  const tabBarHeight = useBottomTabBarHeight();
  const {userStore} = useStore();

  const handlePress = async () => {
    userStore.setToken(undefined);
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('favorite');
    await AsyncStorage.removeItem('offered');
  };

  const handleAccordionPress = text => {
    console.log(text);
  };

  return (
    <View style={styles.container}>
      <ProfileHeader />
      {items.map(({iconName, id, text}) => {
        return (
          <ProfileAccordion
            key={id}
            iconName={iconName}
            text={text}
            onPress={handleAccordionPress}
          />
        );
      })}

      <Btn
        onClick={handlePress}
        textStyle={styles.btnText}
        text={'Log Out'}
        additionalItem={
          <View
            style={{
              transform: [{rotate: '90deg'}],
              position: 'absolute',
              left: 25,
            }}>
            <Icons
              iconHeight={18}
              iconWidth={18}
              iconName={'upload'}
              fill={EStyleSheet.value('$lightGreen')}
            />
          </View>
        }
        containerStyle={[
          styles.btnContainer,
          {
            width:
              Dimensions.get('screen').width -
              EStyleSheet.value('$paddingTabs') * 2,
            bottom: 24 + tabBarHeight,
          },
        ]}
      />
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {flex: 1, backgroundColor: '$backgroundColor'},
  btnContainer: {
    backgroundColor: '$grayBackground',
    position: 'absolute',
    marginLeft: '$paddingTabs',
  },
  btnText: {
    color: '$lightGreen',
  },
});

export default Account;
