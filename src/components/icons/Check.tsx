import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../models/Icon';

export default function Check({
  iconHeight = 16,
  iconWidth = 21,
  fill,
}: IconProps) {
  return (
    <Svg
      width={iconWidth}
      height={iconHeight}
      viewBox={`0 0 21 16`}
      fill="none">
      <Path
        d="M19.127 4.657h0l-9.923 9.977a1.98 1.98 0 01-1.35.557 1.89 1.89 0 01-1.325-.553l-4.974-4.99a1.887 1.887 0 01-.53-1.332c0-.49.2-.957.551-1.331a2.028 2.028 0 011.333-.553c.496.001.958.19 1.321.535l3.305 3.316.319.32.319-.32 8.278-8.306a1.908 1.908 0 011.322-.536c.508.02.97.212 1.332.575.348.349.552.815.552 1.31 0 .51-.193.993-.53 1.331z"
        fill={fill ? fill : '#53B175'}
        stroke={fill ? fill : '#FCFCFC'}
        strokeWidth={0.9}
      />
    </Svg>
  );
}
