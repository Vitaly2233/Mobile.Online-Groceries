import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../models/Icon';

export default function Hide({
  iconHeight = 21,
  iconWidth = 20,
  iconPress,
}: IconProps) {
  return (
    <Svg width={iconHeight} height={iconWidth} onPress={iconPress} fill="none">
      <Path
        d="M15.52 7.649l1.468-1.467c1.872 1.08 3.12 2.573 3.12 4.228 0 3.303-4.943 5.973-9.968 5.98-1.023 0-2.043-.107-3.043-.319l1.741-1.74c.425.044.86.067 1.299.066h.002c-.414 0-.812-.063-1.187-.18l1.974-1.975a2.005 2.005 0 001.047-1.046l1.973-1.974a3.988 3.988 0 01-3.784 5.175c4.231-.015 7.952-2.177 7.952-3.987 0-.94-1.019-1.98-2.594-2.761zM6.25 11.282a3.987 3.987 0 013.884-4.859c-4.204-.015-7.967 2.17-7.967 3.987 0 .893.901 1.87 2.32 2.635l-1.454 1.451C1.302 13.428.172 11.99.172 10.41c0-3.303 4.968-5.997 9.968-5.98a14.74 14.74 0 012.7.26L11.07 6.46a13.4 13.4 0 00-.877-.037c.28.004.555.037.82.096l-4.764 4.763zM19.202 1.147a.997.997 0 010 1.41L2.288 19.47a.996.996 0 11-1.41-1.408L17.791 1.148a.996.996 0 011.41 0z"
        fill="#7C7C7C"
      />
    </Svg>
  );
}
