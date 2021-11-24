import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {getBase64Icon} from '../actions/products';
import {RandomColor} from '../util/RandomColor';

const CategoryCard = ({
  name,
  id,
  onPress,
}: {
  name: string;
  id: string;
  onPress?: any;
}) => {
  const [picture, setPicture] = useState('');

  const {background, border} = RandomColor();

  const init = async () => {
    setPicture(await getBase64Icon(id));
  };

  useEffect(() => {
    init();
  }, []);

  const margin = 12;

  const cardWidth =
    (Dimensions.get('window').width -
      EStyleSheet.value('$paddingTabs') * 2 -
      margin) /
    2;

  const imageWidth = cardWidth - 30;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          styles.container,
          {borderColor: border, backgroundColor: background},
          {width: cardWidth, marginRight: margin, marginBottom: margin},
        ]}>
        <Image
          resizeMode={'contain'}
          style={{height: 90, width: imageWidth}}
          source={{uri: `data:image/jpeg;base64,${picture}`}}
        />
        <Text style={styles.text}> {name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = EStyleSheet.create({
  container: {
    padding: 20,
    height: 170,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: 18,
    borderWidth: 1,
  },
  text: {
    color: '$mainDark',
    fontFamily: '$mediumFont',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CategoryCard;
