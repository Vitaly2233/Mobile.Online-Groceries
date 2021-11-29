import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useStore} from '../../store';
import {RandomColor} from '../../util/RandomColor';

const GroceriesList = () => {
  const navigation = useNavigation();
  const {productStore} = useStore();

  const handleSeeAllPress = () => {
    navigation.navigate('Explore');
  };

  const renderItem = (data: any) => {
    const {background} = RandomColor();
    const picture = productStore.pictures['6194f4cd2f7df08c18014fc0'];

    const grocery = data.item;
    return (
      <View
        style={[
          styles.itemContainer,
          {backgroundColor: background},
          data.index === 0 && {marginLeft: 30},
        ]}>
        <Image
          style={styles.imageStyle}
          resizeMode={'contain'}
          source={{
            uri: `data:image/jpeg;base64,${picture}`,
          }}
        />
        <Text style={styles.text}>{grocery.name}</Text>
      </View>
    );
  };

  return (
    <View style={{marginTop: 30}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.categoryText}>Groceries</Text>
        <TouchableWithoutFeedback onPress={handleSeeAllPress}>
          <View style={styles.touchableContainer}>
            <Text style={styles.seeAllLink}>See all</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={[
          {name: 'Pulses', img: 'some image'},
          {name: 'Rice', img: 'some image'},
          {name: 'Pulses', img: 'some image'},
        ]}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = EStyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 230,
    height: 100,
    borderRadius: 18,
    marginLeft: 15,
  },
  categoryText: {
    marginBottom: 20,
    fontSize: 24,
    fontFamily: '$mediumFont',
    marginLeft: '$paddingTabs',
    color: '$mainDark',
  },
  imageStyle: {width: 70, height: 70, margin: 15},
  text: {
    fontSize: 20,
    fontFamily: '$regularFont',
    color: '$mainDark',
  },
  touchableContainer: {
    alignItems: 'center',
    paddingVertical: 5,
    paddingLeft: 5,
    justifyContent: 'center',
    marginRight: '$paddingTabs'
  },
  seeAllLink: {
    color: '$lightGreen',
    fontSize: 16,
    fontFamily: '$mediumFont',
  },
});

export default GroceriesList;
