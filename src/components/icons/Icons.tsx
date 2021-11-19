import React from 'react';
import Carrot from './Carrot';
import ColorCarrot from './ColorCarrot';
import Hide from './Hide';
import Check from './Check';
import LogoName from './LogoName';
import Search from './Search';
import {IconProps} from '../../models/Icon';
import Shop from './Shop';
import Explore from './Explore';
import Cart from './Cart';
import Favourite from './Favourite';
import Account from './Account';
import Plus from './Plus';
import Arrow from './Arrow';
import Upload from './Upload';
import Minus from './Minus';

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
    case 'Shop':
      return <Shop {...props} />;
    case 'Explore':
      return <Explore {...props} />;
    case 'Cart':
      return <Cart {...props} />;
    case 'Favourite':
      return <Favourite {...props} />;
    case 'Account':
      return <Account {...props} />;
    case 'plus':
      return <Plus {...props} />;
    case 'minus':
      return <Minus {...props} />;
    case 'arrow':
      return <Arrow {...props} />;
    case 'upload':
      return <Upload {...props} />;
    default:
      return null;
  }
};

export default Icons;
