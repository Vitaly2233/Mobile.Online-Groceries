import React from 'react';
import Carrot from './Carrot';
import ColorCarrot from './ColorCarrot';

interface Props {
  iconName: 'carrot' | 'colorCarrot';
}

const Icons = (props: Props) => {
  const {iconName} = props;

  switch (iconName) {
    case 'carrot':
      return <Carrot />;
    case 'colorCarrot':
      return <ColorCarrot />;
  }
};

export default Icons;
