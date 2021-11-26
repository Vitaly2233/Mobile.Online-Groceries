import React from 'react';
import {FlatList, Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icons from '../icons/Icons';

const PaymentList = ({data}) => {
  const renderItem = data => {
    const {name, item} = data.item;
    return (
      <View style={styles.container}>
        <Text style={styles.category}>{name}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {item}
          <View style={{transform: [{rotate: '180deg'}], marginLeft: 15}}>
            <Icons iconName={'arrow'} />
          </View>
        </View>
      </View>
    );
  };

  return <FlatList data={data} renderItem={renderItem} />;
};

const styles = EStyleSheet.create({
  container: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '$lineColor',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  category: {fontSize: 18, fontFamily: '$mediumFont', color: '$gray'},
});

export default PaymentList;
