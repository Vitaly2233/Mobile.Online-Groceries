import CheckBox from '@react-native-community/checkbox';
import {observer} from 'mobx-react-lite';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useStore} from '../../store';

const Filters = observer(() => {
  const {productStore} = useStore();
  const categories = productStore.categories;

  const mapCategories = category => {
    const condition = productStore.filters.categories.includes(category._id);

    return (
      <View style={styles.optionsContainer} key={category._id}>
        <CheckBox
          value={condition ?? false}
          onValueChange={val => {
            val
              ? productStore.setCategoryFilter(category._id)
              : productStore.deleteCategoryFilter(category._id);
          }}
        />
        <Text style={styles.optionText}>{category.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.sectionText}>Categories</Text>
        {categories.map(mapCategories)}
      </View>
    </View>
  );
});

const styles = EStyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  content: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '$grayBackground',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: '$paddingTabs',
  },
  sectionText: {
    fontSize: 24,
    fontFamily: 'mediumFont',
    color: '$mainDark',
  },
  optionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  optionText: {
    color: '$mainDark',
    fontFamily: 'mediumFont',
    fontSize: 16,
  },
});

export default Filters;
