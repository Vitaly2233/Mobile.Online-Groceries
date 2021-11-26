import AsyncStorage from '@react-native-async-storage/async-storage';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Btn from '../../components/Btn';
import ProfileHeader from '../../components/ProfileHeader';
import {useStore} from '../../store';

const Account = () => {
  const tabBarHeight = useBottomTabBarHeight();
  const {userStore} = useStore();

  const handlePress = async () => {
    userStore.setToken(undefined);
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('favorite');
    await AsyncStorage.removeItem('offered');
  };

  return (
    <View style={styles.container}>
      <ProfileHeader />
      <Btn
        onClick={handlePress}
        // additionalItem={}
        textStyle={styles.btnText}
        text={'Log Out'}
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
