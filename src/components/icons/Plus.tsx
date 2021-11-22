import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../models/Icon';

export default function Plus({
  iconHeight = 17,
  iconWidth = 17,
  fill,
}: IconProps) {
  return (
    <Svg width={iconWidth} height={iconHeight} viewBox="0 0 18 18" fill="none">
      <Path
        d="M17.103 8.63c0 .376-.144.739-.414 1.002-.263.27-.626.42-1.002.42h-5.665v5.662c0 .376-.15.74-.42 1.002-.263.263-.62.414-.996.414a1.423 1.423 0 01-1.422-1.416v-5.662H1.519A1.422 1.422 0 01.516 7.628a1.423 1.423 0 011.003-.414h5.665V1.552c0-.376.15-.74.42-1.003a1.403 1.403 0 011.998 0c.27.263.42.627.42 1.003v5.662h5.665c.376 0 .739.15 1.002.413.27.27.414.627.414 1.003z"
        fill={fill ? fill : '#fff'}
      />
    </Svg>
  );
}
