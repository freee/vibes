import * as React from 'react';
import { DropdownContent } from './types';
declare type Props = {
    content: DropdownContent;
    onKeyDown: (e: React.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement | HTMLInputElement>) => void;
    selectableItemRef?: React.Ref<HTMLButtonElement | HTMLAnchorElement | HTMLInputElement>;
    onRequestClose?: () => void;
};
declare const Item: React.FC<Props>;
export default Item;
