import React from 'react';
import {
  Animated,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

const ScaledItem = ({children, containerStyle, onPress}: any) => {
  const animatedValue = new Animated.Value(0);

  const handlePressIn = () => {
    Animated.spring(animatedValue, {toValue: 1, useNativeDriver: true}).start();
  };

  const handlePressOut = () => {
    Animated.spring(animatedValue, {toValue: 0, useNativeDriver: true}).start();
  };

  const scaleAnimation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const animatedStyle = {
    transform: [{scale: scaleAnimation}],
  };

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      <Animated.View style={[animatedStyle, containerStyle]}>
        {children}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default ScaledItem;
