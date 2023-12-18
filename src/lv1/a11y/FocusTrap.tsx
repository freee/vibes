import * as React from 'react';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { getFocusableElements } from '../../utilities/FocusableEelements';

type Props = {
  children: React.ReactNode;
  /** フォーカスをループさせるかどうか。`true` にすると、末尾までフォーカスが移動したあと、先頭に移動するようになります */
  loop?: boolean;
  /** display:inline-blockとなり、要素がspanになります */
  inline?: boolean;
  /** フォーカスが外側からコンポーネントの先端に到達した場合の処理です。 `true` を返した場合、コンポーネント内にフォーカスを移す処理を行いません。 */
  onFocusOutsideTop?: (event: React.FocusEvent) => void | boolean;
  /** フォーカスが外側からコンポーネントの後端に到達した場合の処理です。 `true` を返した場合、コンポーネント内にフォーカスを移す処理を行いません。 */
  onFocusOutsideBottom?: (event: React.FocusEvent) => void | boolean;
  /** フォーカスが内側からコンポーネントの先端に到達した場合の処理です。 `true` を返した場合、コンポーネント内にフォーカスを戻す処理を行いません。 */
  onFocusInsideTop?: (event: React.FocusEvent) => void | boolean;
  /** フォーカスが内側からコンポーネントの後端に到達した場合の処理です。 `true` を返した場合、コンポーネント内にフォーカスを戻す処理を行いません。 */
  onFocusInsideBottom?: (event: React.FocusEvent) => void | boolean;
} & CommonProps;

/**
 * フォーカストラップ（Tabキー/Shift+Tabキーによるフォーカス移動では脱出できない領域）を作るコンポーネントです
 *
 * フォーカストラップは、上手く作ればキーボードによる操作が効率化され、ユーザーの理解を助けることができます。
 * しかし、作り方が悪いとキーボードによる操作の完遂が不可能になってしまうことがあります。
 *
 * **フォーカストラップを作る場合は、慎重に設計とテストを行ってください**。
 * 特に、Tabキー、矢印キー、Escキーなどを使って、簡単かつユーザーが予想しやすい方法でフォーカストラップから脱出できるような仕組みを必ず用意してください
 * （[キーボード・トラップの回避](https://a11y-guidelines.freee.co.jp/categories/input_device.html#gl-input-device-no-trap)）。
 *
 * このコンポーネントは、単純なフォーカストラップのほか、先端/末尾から移動する際に特定の場所にフォーカスを移すような挙動や、
 * フォーカス順序を意図的にDOM上の順序とは変えるようなこともできます。
 *
 * `onFocusOutsideTop` `onFocusOutsideBottom` は、FocusTrap内へフォーカスが進入しようとした場合の処理を定義できます。
 * また、 `onFocusInsideTop` `onFocusInsideBottom` は、FocusTrapの外へフォーカスが脱出しようとした場合の処理を定義できます。
 * これらのコールバックが `true` を返す場合、FocusTrapコンポーネントはフォーカスを移動させる処理を行いません（通常はFocusTrap内の先頭または末尾の要素にフォーカスを移します）。
 * これらを使うことで、複雑な順序のフォーカス制御を行うことができます。
 *
 *
 */
export const FocusTrap: React.FC<Props> = ({
  children,
  loop,
  inline,
  onFocusOutsideTop,
  onFocusOutsideBottom,
  onFocusInsideTop,
  onFocusInsideBottom,
  ...props
}: Props) => {
  const ref = React.useRef<HTMLDivElement>(null);
  return React.createElement(
    inline ? 'span' : 'div',
    commonProps(props, 'vb-focusTrap', { inline }),
    <>
      <span
        // 外から来たときは先頭の要素にフォーカスさせる
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
        onFocus={(e) => {
          if (onFocusOutsideTop && onFocusOutsideTop(e)) {
            return;
          }
          if (ref.current) {
            const focusable = getFocusableElements(ref.current);
            (focusable.length > 0
              ? (focusable[0] as HTMLElement)
              : ref.current
            ).focus();
          }
        }}
      />
      <span
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
        onFocus={(e) => {
          if (onFocusInsideTop && onFocusInsideTop(e)) {
            return;
          }
          if (ref.current) {
            const focusable = getFocusableElements(ref.current);
            (focusable.length > 0
              ? ((loop
                  ? focusable[focusable.length - 1]
                  : focusable[0]) as HTMLElement)
              : ref.current
            ).focus();
          }
        }}
      />
      {React.createElement(
        inline ? 'span' : 'div',
        { tabIndex: -1, ref },
        children
      )}
      <span
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
        onFocus={(e) => {
          if (onFocusInsideBottom && onFocusInsideBottom(e)) {
            return;
          }
          if (ref.current) {
            const focusable = getFocusableElements(ref.current);
            (focusable.length > 0
              ? ((loop
                  ? focusable[0]
                  : focusable[focusable.length - 1]) as HTMLElement)
              : ref.current
            ).focus();
          }
        }}
      />
      <span
        // 外から来たときは末尾の要素にフォーカスさせる
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
        onFocus={(e) => {
          if (onFocusOutsideBottom && onFocusOutsideBottom(e)) {
            return;
          }
          if (ref.current) {
            const focusable = getFocusableElements(ref.current);
            (focusable.length > 0
              ? (focusable[focusable.length - 1] as HTMLElement)
              : ref.current
            ).focus();
          }
        }}
      />
    </>
  );
};
