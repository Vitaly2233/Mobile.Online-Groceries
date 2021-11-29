import React from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import Icons from './icons/Icons';

const CheckBox = ({isChecked, onPress}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        onPress(isChecked);
      }}>
      <View
        style={[
          {
            height: 25,
            width: 25,
            borderRadius: 8,
            backgroundColor: '#53B175',
            justifyContent: 'center',
            alignItems: 'center',
          },
          !isChecked ? {backgroundColor: 'transparent', borderWidth: 1, borderColor: '#B1B1B1'} : null,
        ]}>
        {isChecked ? (
          <Icons
            iconName={'check'}
            iconHeight={10}
            iconWidth={14}
            fill={'white'}
          />
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CheckBox;
