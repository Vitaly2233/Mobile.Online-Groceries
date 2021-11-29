import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Modal from 'react-native-modal';
import {computeProducts} from '../../actions/products';
import Btn from '../../components/Btn';
import Icons from '../../components/icons/Icons';
import PaymentList from '../../components/Lists/PaymentList';

const Checkout = ({isVisible = false, handleHide}) => {
  const {generalPrice} = computeProducts();
  const navigation = useNavigation();

  const data = [
    {
      name: 'Delivery',
      item: <Text style={styles.itemText}>Select Method</Text>,
    },
    {
      name: 'Pament',
      item: <Icons iconName={'Card'} />,
    },
    {
      name: 'Promo Code',
      item: <Text style={styles.itemText}>Pick discount</Text>,
    },
    {
      name: 'Total Cost',
      item: <Text style={styles.itemText}>${generalPrice}</Text>,
    },
  ];

  const handleClick = () => {
    // StatusBar.setHidden(true);
    // StatusBar.setTranslucent(true);
    // navigation.navigate('OrderAccepted');
    navigation.navigate('Favourite', {showFail: true});
  };

  return (
    <Modal
      statusBarTranslucent={true}
      isVisible={isVisible}
      animationIn={'slideInUp'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={handleHide}>
        <View style={{flex: 1}}>
          <View style={styles.content}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Checkout</Text>
              <TouchableWithoutFeedback onPress={handleHide}>
                <Icons
                  iconName={'XIcon'}
                  fill={EStyleSheet.value('$mainDark')}
                  iconHeight={16}
                  iconWidth={16}
                />
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.paddingWrapper}>
              <PaymentList data={data} />
              <Text style={{marginTop: 20}}>
                <Text style={{color: EStyleSheet.value('$gray')}}>
                  By placing an order you agree to our {'\n'}
                </Text>
                <Text style={{color: EStyleSheet.value('$mainDark')}}>
                  Terms
                </Text>
                <Text style={{color: EStyleSheet.value('$gray')}}> And </Text>
                <Text style={{color: EStyleSheet.value('$mainDark')}}>
                  Conditions
                </Text>
              </Text>
              <Btn
                onClick={handleClick}
                text={'Place Order'}
                containerStyle={{marginTop: 25}}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = EStyleSheet.create({
  container: {margin: 0},
  content: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingBottom: '$paddingTabs',
    backgroundColor: '$grayBackground',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  title: {
    color: '$mainDark',
    fontSize: 24,
  },
  titleContainer: {
    paddingHorizontal: '$paddingTabs',
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderColor: '$lineColor',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  paddingWrapper: {
    paddingHorizontal: '$paddingTabs',
  },
  itemText: {
    color: '$mainDark',
    fontSize: 16,
    fontFamily: '$mediumFont',
  },
});

export default Checkout;
