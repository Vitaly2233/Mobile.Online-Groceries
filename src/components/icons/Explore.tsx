import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';
import {IconProps} from '../../models/Icon';

export default function Explore({
  iconHeight = 20,
  iconWidth = 20,
  fill,
}: IconProps) {
  return (
    <Svg width={iconWidth} height={iconHeight} viewBox="0 0 29 19" fill="none">
      <Path
        d="M18.324 14.238a6 6 0 100-12.002 6 6 0 000 12.002zm6.32-1.095l3.58 3.58a1.004 1.004 0 01.23 1.099 1 1 0 01-1.645.315l-3.58-3.58a8 8 0 111.414-1.415l.001.002z"
        fill={fill ? fill : '#181725'}
      />
      <Rect
        x={0.179}
        y={0.237}
        width={8.855}
        height={2.399}
        rx={1.2}
        fill={fill ? fill : '#181725'}
      />
      <Rect
        x={0.179}
        y={7.675}
        width={6.464}
        height={2.399}
        rx={1.2}
        fill={fill ? fill : '#181725'}
      />
      <Rect
        x={0.179}
        y={15.114}
        width={8.855}
        height={2.399}
        rx={1.2}
        fill={fill ? fill : '#181725'}
      />
    </Svg>
  );
}
