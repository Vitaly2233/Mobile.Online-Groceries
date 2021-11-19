import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../models/Icon';

export default function Arrow({iconHeight = 18, iconWidth = 10}: IconProps) {
  return (
    <Svg width={iconWidth} height={iconHeight} viewBox="0 0 11 19" fill="none">
      <Path
        d="M9.66 15.827c.235.257.365.595.352.947 0 .352-.13.677-.378.934-.235.244-.56.393-.9.393-.339 0-.665-.122-.912-.366l-7.38-7.66a1.343 1.343 0 01-.274-.433 1.391 1.391 0 01-.104-.514c0-.176.04-.352.104-.528.066-.163.157-.312.274-.433l7.38-7.66c.117-.122.26-.23.417-.298A1.307 1.307 0 019.256.195c.156.068.3.176.43.298.117.122.209.284.274.447.078.162.104.338.104.527 0 .176-.039.352-.104.515-.065.162-.17.31-.3.446l-6.454 6.7 1.226 1.258 5.228 5.44z"
        fill="#181725"
      />
    </Svg>
  );
}
