import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../models/Icon';

export default function XIcon({
  iconHeight = 14,
  iconWidth = 14,
  fill,
}: IconProps) {
  return (
    <Svg width={iconWidth} height={iconHeight} viewBox="0 0 15 16" fill="none">
      <Path
        d="M14.544 13.192v-.001l-4.392-4.232h0l-.992-.943 5.384-5.174a1.064 1.064 0 00.355-.783.919.919 0 00-.093-.433 1.13 1.13 0 00-.24-.362h0l-.003-.002a1.355 1.355 0 00-.375-.24 1.225 1.225 0 00-.446-.077c-.15 0-.298.033-.444.087h0-.001a1.164 1.164 0 00-.367.243L6.731 7.233c-.104.1-.184.221-.241.353h0v.001a1.156 1.156 0 00-.092.43c0 .144.035.288.092.42.057.13.137.252.241.352l6.199 5.958h0l.001.001c.218.2.505.298.8.298.298 0 .585-.121.79-.32.218-.208.333-.474.334-.761a1.044 1.044 0 00-.31-.773z"
        fill={fill ? fill : '#B3B3B3'}
        stroke="#B3B3B3"
        strokeWidth={0.1}
      />
      <Path
        d="M.99 2.799h.001l4.392 4.232h0l.992.943L.991 13.15a1.063 1.063 0 00-.355.783c0 .152.023.297.093.432.056.13.136.262.24.362h0l.002.002c.112.097.237.185.376.24.139.056.299.078.446.078.15 0 .298-.034.444-.088h.001c.139-.056.265-.144.367-.242l6.199-5.958c.104-.1.184-.222.241-.353h0v-.002c.057-.14.092-.284.092-.429 0-.144-.035-.288-.092-.42a1.087 1.087 0 00-.241-.353l-6.2-5.958h0a1.179 1.179 0 00-1.59.021 1.042 1.042 0 00-.334.762c-.011.288.105.564.31.773z"
        fill={fill ? fill : '#B3B3B3'}
        stroke="#B3B3B3"
        strokeWidth={0.1}
      />
    </Svg>
  );
}