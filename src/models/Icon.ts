export type IconName =
  | null
  | 'carrot'
  | 'colorCarrot'
  | 'hide'
  | 'check'
  | 'logoName'
  | 'search'
  | 'plus'
  | 'minus'
  | 'arrow'
  | 'upload'
  | 'Shop'
  | 'Explore'
  | 'Cart'
  | 'Favourite'
  | 'Account';

export interface IconProps {
  iconName?: IconName;
  iconWidth?: number;
  iconHeight?: number;
  fill?: string;
}
