import { DropdownContent } from '../dropdown/types';

export type SectionData = {
  type?: 'plan' | 'link' | 'button' | 'text' | 'dropdown';
  text: string;
  url?: string;
  IconComponent?: React.ElementType;
  iconType?: 'default' | 'alert' | 'notice';
  iconLabel?: string;
  dropdownContents?: Array<DropdownContent>;
  hasBadge?: boolean;
  onClick?: () => void;
};
