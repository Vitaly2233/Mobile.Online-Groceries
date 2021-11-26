import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/core';
import {observer} from 'mobx-react-lite';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Btn from '../../components/Btn';
import {useStore} from '../../store';

const Filters = observer(() => {
  const navigation = useNavigation();
  const {productStore} = useStore();
  const categories = productStore.categories;
  const [filterChecked, setFilterChecked] = useState(
    productStore.filters.categories,
  );

  const handleClick = () => {
    productStore.setCategoryFilter(filterChecked);
    navigation.goBack();
  };

  const onCheckboxChange = (val, category) => {
    const categoryId = category._id;
    if (val) {
      setFilterChecked([...filterChecked, categoryId]);
    } else {
      const filtered = filterChecked.filter(item => item !== categoryId);
      setFilterChecked(filtered);
    }
  };

  const mapCategories = category => {
    const categoryId = category._id;
    const condition = filterChecked.includes(categoryId);
    return (
      <View style={styles.optionsContainer} key={categoryId}>
        <CheckBox
          value={condition ?? false}
          onValueChange={val => {
            onCheckboxChange(val, category);
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
      <Btn
        containerStyle={styles.btnContainer}
        text={'Apply Filter'}
        onClick={handleClick}
      />
    </View>
  );
});

const styles = EStyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', paddingBottom: 25},
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
    fontFamily: '$boldFont',
    color: '$mainDark',
  },
  optionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  optionText: {
    color: '$mainDark',
    fontFamily: '$mediumFont',
    fontSize: 16,
  },
  btnContainer: {
    paddingHorizontal: '$paddingTabs',
  },
});

export default Filters;
