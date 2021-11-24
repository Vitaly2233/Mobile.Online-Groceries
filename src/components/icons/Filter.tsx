import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Svg, {Circle, Rect} from 'react-native-svg';
import {IconProps} from '../../models/Icon';

export default function Filter({iconHeight = 15, iconWidth = 15}: IconProps) {
  return (
    <Svg
      width={iconWidth}
      height={iconHeight}
      viewBox="0 0 18 19"
      fill={'none'}>
      <Circle
        cx={6.013}
        cy={4.944}
        r={3.3}
        stroke="#181725"
        strokeWidth={1.9}
      />
      <Rect
        x={0.244}
        y={3.902}
        width={3.308}
        height={2.083}
        rx={1.042}
        fill="#181725"
        stroke="#181725"
        strokeWidth={0.3}
      />
      <Circle
        cx={11.67}
        cy={14.292}
        r={3.3}
        transform="rotate(-180 11.67 14.292)"
        stroke="#181725"
        strokeWidth={1.9}
      />
      <Rect
        x={9.186}
        y={3.902}
        width={7.836}
        height={2.083}
        rx={1.042}
        fill="#181725"
        stroke="#181725"
        strokeWidth={0.3}
      />
      <Rect
        x={8.498}
        y={15.334}
        width={7.84}
        height={2.083}
        rx={1.042}
        transform="rotate(-180 8.498 15.334)"
        fill="#181725"
        stroke="#181725"
        strokeWidth={0.3}
      />
      <Rect
        x={17.346}
        y={15.334}
        width={2.841}
        height={2.083}
        rx={1.042}
        transform="rotate(-180 17.346 15.334)"
        fill="#181725"
        stroke="#181725"
        strokeWidth={0.3}
      />
    </Svg>
  );
}
