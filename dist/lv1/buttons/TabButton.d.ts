import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    children?: React.ReactNode;
    /**
     * 選択状態にします
     */
    current?: boolean;
    /**
     * サイズを小さくします
     */
    small?: boolean;
} & MarginClassProps & CommonProps;
export default function TabButton(props: Props): React.ReactElement;
export {};
