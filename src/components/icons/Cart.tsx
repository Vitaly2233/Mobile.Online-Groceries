import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../models/Icon';

export default function Cart({
  iconHeight = 20,
  iconWidth = 20,
  fill,
}: IconProps) {
  return (
    <Svg width={iconWidth} height={iconHeight} viewBox="0 0 23 21" fill="none">
      <Path
        d="M8.985 20.518a2.445 2.445 0 110-4.89 2.445 2.445 0 010 4.89zm8.559 0a2.445 2.445 0 110-4.89 2.445 2.445 0 010 4.89zM1.602 3.306a1.176 1.176 0 010-2.35H3.01c1.103 0 2.056.765 2.296 1.84l1.532 6.899a2.352 2.352 0 002.296 1.841h9.185l1.763-7.055H8.656a1.176 1.176 0 010-2.35h11.426a2.351 2.351 0 012.282 2.923L20.6 12.106a2.351 2.351 0 01-2.281 1.781H9.134a4.702 4.702 0 01-4.591-3.682L3.01 3.306H1.602z"
        fill={fill ? fill : '#181725'}
      />
    </Svg>
  );
}
