import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../models/Icon';

export default function Account({
  iconHeight = 20,
  iconWidth = 20,
  fill,
}: IconProps) {
  return (
    <Svg width={iconWidth} height={iconHeight} viewBox="0 0 17 21" fill="none">
      <Path
        d="M4.669 10.588a1.29 1.29 0 01.891-.003c.141.052.27.128.377.223a.997.997 0 01.247.333.888.888 0 01-.022.778 1.018 1.018 0 01-.265.322c-.113.091-.245.162-.389.207a4.05 4.05 0 00-1.886 1.316 3.27 3.27 0 00-.71 2.014v1.74c0 .265.12.52.335.707.215.188.506.293.81.293h9.164c.303 0 .595-.105.81-.293a.94.94 0 00.335-.707v-1.647c0-.742-.258-1.466-.74-2.076-.482-.61-1.165-1.079-1.959-1.343a1.192 1.192 0 01-.392-.202 1.021 1.021 0 01-.27-.32.887.887 0 01-.032-.779.994.994 0 01.243-.336c.106-.096.234-.173.374-.226a1.287 1.287 0 01.893-.005c1.227.408 2.284 1.132 3.03 2.077.745.944 1.144 2.063 1.144 3.21v1.647c0 .796-.362 1.559-1.007 2.121-.644.563-1.518.88-2.43.88H4.058c-.911 0-1.785-.317-2.43-.88-.644-.562-1.006-1.325-1.006-2.12v-1.74c0-1.12.386-2.215 1.108-3.14.722-.926 1.746-1.64 2.94-2.05zM8.639.518c1.215 0 2.38.421 3.24 1.172.859.75 1.342 1.767 1.342 2.828v2c0 1.06-.483 2.078-1.342 2.828-.86.75-2.025 1.172-3.24 1.172-1.215 0-2.38-.421-3.24-1.172-.86-.75-1.342-1.767-1.342-2.828v-2c0-1.06.483-2.078 1.342-2.828C6.259.94 7.424.518 8.639.518zm0 2c-.608 0-1.19.21-1.62.586-.43.375-.671.884-.671 1.414v2c0 .53.241 1.04.67 1.414a2.47 2.47 0 001.62.586c.608 0 1.191-.21 1.62-.586.43-.375.672-.884.672-1.414v-2c0-.53-.242-1.04-.671-1.414a2.47 2.47 0 00-1.62-.586z"
        fill={fill ? fill : '#181725'}
      />
    </Svg>
  );
}
