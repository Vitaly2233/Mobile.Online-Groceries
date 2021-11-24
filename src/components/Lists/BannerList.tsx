import React, {useRef, useState} from 'react';
import {Animated, Dimensions, Image, View} from 'react-native';
import {ExpandingDot} from 'react-native-animated-pagination-dots';
import EStyleSheet from 'react-native-extended-stylesheet';

const BannerList = () => {
  const testData = [1, 2, 3, 4];
  const banner = require('../../assets/img/Banner.png');
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const onViewRef = useRef(({viewableItems}: any) => {
    if (viewableItems) {
      setActiveIndex(viewableItems[0].index);
    }
  });
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  const renderItem = () => {
    return (
      <Image
        resizeMode={'contain'}
        source={banner}
        style={{
          height: 100,
          width: Dimensions.get('screen').width - 50,
          marginHorizontal: EStyleSheet.value('$paddingTabs'),
        }}
      />
    );
  };

  return (
    <View>
      <Animated.FlatList
        renderItem={renderItem}
        data={testData}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        initialNumToRender={activeIndex + 1}
        keyExtractor={(item, index) => String(index)}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        pagingEnabled
        horizontal
        decelerationRate={'normal'}
        scrollEventThrottle={16}
      />
      <ExpandingDot
        data={testData}
        expandingDotWidth={17}
        inActiveDotColor={'#030303'}
        activeDotColor={EStyleSheet.value('$lightGreen')}
        inActiveDotOpacity={0.2}
        scrollX={scrollX}
        dotStyle={styles.dotStyle}
        containerStyle={styles.dotsContainer}
      />
    </View>
  );
};

const styles = EStyleSheet.create({
  dotsContainer: {
    bottom: 10,
  },
  dotStyle: {
    width: 6,
    height: 6,
    borderRadius: 5,
    marginHorizontal: 2,
    padding: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
  },
});

export default BannerList;
