export type IconName =
  | null
  | 'carrot'
  | 'colorCarrot'
  | 'hide'
  | 'check'
  | 'logoName'
  | 'search';

export interface IconProps {
  iconName?: IconName;
  iconWidth?: number;
  iconHeight?: number;
}
