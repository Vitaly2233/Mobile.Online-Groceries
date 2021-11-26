import React, {useRef, useState} from 'react';
import {
  Animated,
  FlatList,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icons from '../components/icons/Icons';

interface Data {
  title: string;
  informationItem?: any;
}

const Accordion: React.FC<Data> = ({title, informationItem, children}: any) => {
  const [bodyHeight, setBodyHeight] = useState(0);
  const [open, setOpen] = useState(false);

  const animatedValue: any = useRef(new Animated.Value(0)).current;
  const opacityContent: any = useRef(new Animated.Value(1)).current;

  const onClick = () => {
    if (open) {
      Animated.parallel([
        Animated.timing(animatedValue, {
          toValue: 0,
          useNativeDriver: false,
          duration: 250,
        }),
        Animated.timing(opacityContent, {
          toValue: 0,
          useNativeDriver: false,
          duration: 250,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(animatedValue, {
          toValue: 1,
          useNativeDriver: false,
          duration: 250,
        }),
        Animated.timing(opacityContent, {
          toValue: 1,
          useNativeDriver: false,
          duration: 250,
        }),
      ]).start();
    }
    setOpen(!open);
  };

  const animatedHeight = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, bodyHeight],
  });

  const contentOpacity = {opacity: opacityContent};

  const arrowAngle = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['-180deg', '-90deg'],
  });
  const animatedStyle = {
    transform: [
      {
        rotate: arrowAngle,
      },
    ],
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={onClick}>
        <View style={styles.rowContainer}>
          <View style={styles.description}>
            <Text style={styles.title}>{title}</Text>
            {informationItem}
          </View>
          <Animated.View style={animatedStyle}>
            <Icons iconName={'arrow'} />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
      <Animated.View
        style={[
          styles.valueContainer,
          {
            height: animatedHeight,
          },
          contentOpacity,
        ]}>
        <View
          onLayout={e => {
            setBodyHeight(e.nativeEvent.layout.height);
          }}
          style={styles.value}>
          <Text style={styles.hiddenText}>{children}</Text>
        </View>
      </Animated.View>
    </>
  );
};

const styles = EStyleSheet.create({
  rowContainer: {
    height: 60,
    borderTopWidth: 1,
    borderColor: '$lineColor',
    paddingVertical: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  description: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 20,
  },
  title: {
    color: '$mainDark',
    fontFamily: '$mediumFont',
    fontSize: 16,
  },
  icon: {
    transform: [{rotate: '-180deg'}],
  },
  valueContainer: {
    overflow: 'hidden',
  },
  value: {
    position: 'absolute',
    paddingBottom: 20,
    bottom: 0,
  },
  hiddenText: {
    fontSize: 13,
    fontFamily: '$regularFont',
    color: '$gray',
  },
});

export default Accordion;
