import {observer} from 'mobx-react-lite';
import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {fetchUser} from '../actions/user';
import {useStore} from '../store';

const ProfileHeader = observer(() => {
  const {userStore} = useStore();
  const init = async () => {
    await fetchUser();
  };

  useEffect(() => {
    init();
  }, []);

  const image = require('../assets/img/Profile.png');
  return (
    <View style={styles.container}>
      <Image
        resizeMode={'contain'}
        source={image}
        style={{height: 60, width: 60, marginRight: 20}}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{userStore.user?.username}</Text>
        <Text style={styles.email}>{userStore.user?.email}</Text>
      </View>
    </View>
  );
});

const styles = EStyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: '$paddingTabs',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '$lineColor',
  },
  infoContainer: {justifyContent: 'center'},
  name: {color: '$mainDark', fontSize: 20, fontFamily: '$mediumFont'},
  email: {color: '$gray', fontSize: 16, fontFamily: '$regularFont'},
});

export default ProfileHeader;
