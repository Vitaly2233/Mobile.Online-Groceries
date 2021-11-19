import React from 'react';
import Svg, { Path } from 'react-native-svg';
import {IconProps} from '../../models/Icon';

export default function Minus({iconHeight, iconWidth}: IconProps) {
  return (
    <Svg width={iconWidth} height={iconHeight} viewBox="0 0 18 3" fill="none">
      <Path
        d="M17.064 1.472c0 .376-.144.74-.413 1.002-.264.27-.627.42-1.003.42H1.48A1.422 1.422 0 01.477.47 1.423 1.423 0 011.48.057h14.168c.376 0 .74.15 1.003.413.269.27.413.626.413 1.002z"
        fill="#B3B3B3"
      />
    </Svg>
  );
}
