import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../models/Icon';

export default function Star({iconHeight = 14, iconWidth = 14}: IconProps) {
  return (
    <Svg width={iconWidth} height={iconHeight} viewBox="0 0 16 15" fill="none">
      <Path
        d="M8.174 11.97L3.625 14.36l.869-5.065L.813 5.708l5.085-.739L8.174.361l2.274 4.608 5.086.74-3.68 3.587.869 5.065-4.55-2.392z"
        fill="#F3603F"
      />
    </Svg>
  );
}
