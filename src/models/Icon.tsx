export type IconName =
  | null
  | string
  | 'carrot'
  | 'colorCarrot'
  | 'hide'
  | 'check'
  | 'logoName'
  | 'search'
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
