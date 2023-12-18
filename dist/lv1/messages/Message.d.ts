import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
export declare type MessageTypes = {
    /**
     * error アイコンを表示します
     */
    error?: boolean;
    /**
     * notice アイコンを表示します
     */
    notice?: boolean;
    /**
     * success アイコンを表示します
     */
    success?: boolean;
    /**
     * info アイコンを表示します
     */
    info?: boolean;
};
declare type Props = {
    children?: React.ReactNode;
} & MessageTypes & MarginClassProps & CommonProps;
export default function Message(props: Props): React.ReactElement;
export {};
