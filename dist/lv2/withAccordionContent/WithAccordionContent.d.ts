import * as React from 'react';
import Button from '../../lv1/buttons/Button';
import { CommonProps } from '../../utilities/commonProps';
declare type AccordionButtonProps = {
    /**
     * 開閉される要素のidを設定します。このidはaria-controlsに用います。
     */
    contentId: string;
    /**
     * 開閉状態を設定します。
     */
    open: boolean;
} & Pick<Parameters<typeof Button>[0], 'onClick' | 'children' | 'appearance' | 'small' | 'large'> & CommonProps;
declare type Props = {
    /**
     * AccordionButtonを含む要素を返します。
     * contentIdはAccordionButtonの引数として渡してください。
     */
    renderAccordionButtonArea: (AccordionButton: React.FC<AccordionButtonProps>, contentId: string) => React.ReactNode;
    /**
     * 開閉状態を設定します。
     */
    isOpen: boolean;
    /**
     * 開閉される要素を設定します。
     */
    children: React.ReactNode;
} & CommonProps;
/**
 * 開閉される要素に用いるコンポーネントです。
 * 同ファイル内に定義されているAccordionButtonと併せて使われる想定です。
 */
declare const WithAccordionContent: React.FC<Props>;
export default WithAccordionContent;
