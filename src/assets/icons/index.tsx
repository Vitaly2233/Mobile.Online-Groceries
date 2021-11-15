import React from 'react';
import Carrot from './Carrot';

interface Props {
  iconName: 'carrot';
}

const Icons = (props: Props) => {
  const {iconName} = props;

  switch (iconName) {
    case 'carrot':
      return <Carrot />;
  }
};

export default Icons;
