import React from 'react';
import {
  Image,
  StatusBar,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Modal from 'react-native-modal';
import Btn from '../../components/Btn';
import Icons from '../../components/icons/Icons';

const OrderFailed = ({showModal, handleHide}) => {
  const image = require('../../assets/img/ProductBucket.png');
  return (
    <Modal isVisible={showModal} statusBarTranslucent={false}>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={handleHide}>
          <View
            style={{
              alignSelf: 'flex-start',
              padding: 5,
              alignItems: 'flex-start',
            }}>
            <Icons
              iconName={'XIcon'}
              fill={EStyleSheet.value('$mainDark')}
              iconHeight={16}
              iconWidth={16}
            />
          </View>
        </TouchableWithoutFeedback>
        <Image source={image} style={{width: 220, height: 220}} />
        <Text style={styles.mainText}>Oops! Order Failed</Text>
        <Text style={styles.infoText}>Something went tembly wrong.</Text>
        <Btn text={'Please Try Again'} />
        <TouchableWithoutFeedback onPress={handleHide}>
          <Text style={styles.bottomText}>Back to home</Text>
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
};

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$backgroundColor',
    bottom: 60,
    width: '100%',
    position: 'absolute',
    padding: '$paddingTabs',
    paddingBottom: 0,
    alignItems: 'center',
    borderRadius: 18,
  },
  mainText: {
    color: '$mainDark',
    textAlign: 'center',
    fontSize: 28,
    marginBottom: 20,
    marginTop: 25,
  },
  infoText: {color: '$gray', textAlign: 'center', marginBottom: 60},
  bottomText: {
    paddingVertical: 25,
    width: '100%',
    color: '$mainDark',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: '$regularFont',
  },
});

export default OrderFailed;
