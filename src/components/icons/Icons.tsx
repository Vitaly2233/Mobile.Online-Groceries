import React from 'react';
import Carrot from './Carrot';
import ColorCarrot from './ColorCarrot';
import Hide from './Hide';
import Check from './Check';
import LogoName from './LogoName';
import Search from './Search';
import {IconProps} from '../../models/Icon';

const Icons = (props: IconProps) => {
  const {iconName} = props;

  switch (iconName) {
    case 'carrot':
      return <Carrot {...props} />;
    case 'colorCarrot':
      return <ColorCarrot {...props} />;
    case 'hide':
      return <Hide {...props} />;
    case 'check':
      return <Check {...props} />;
    case 'logoName':
      return <LogoName {...props} />;
    case 'search':
      return <Search {...props} />;
    default:
      return null;
  }
};

export default Icons;
