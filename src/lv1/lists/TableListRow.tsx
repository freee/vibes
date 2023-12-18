import * as React from 'react';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { KeyCodes } from '../../utilities/keyboard';
import selfWindowNavigator, {
  SelfWindowNavigationProp,
} from '../../utilities/selfWindowNavigator';
import {
  TableRowAriaProps,
  filterTableRowAriaProps,
} from '../../utilities/AriaProps';

type Props = {
  children?: React.ReactNode;
  /**
   * hrefを設定します
   */
  url?: string;
  /**
   * クリックハンドラを設定します
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: () => any;
} & CommonProps &
  SelfWindowNavigationProp &
  TableRowAriaProps;

const TableListRow: React.ForwardRefRenderFunction<
  HTMLTableRowElement,
  Props
> = (props: Props, ref: React.Ref<HTMLTableRowElement>) => {
  const { children, onClick, url, onSelfWindowNavigation } = props;

  const baseClassName = 'vb-tableListRow';
  const classModifier = {
    clickable: !!onClick || !!url,
  };

  return onClick || url ? (
    <tr
      tabIndex={0}
      ref={ref}
      onClick={onClick}
      onKeyDown={(e): void => {
        if (e.target !== e.currentTarget) {
          return;
        }
        if (e.keyCode === KeyCodes.ENTER) {
          e.preventDefault();
          if (url) {
            const a = document.createElement('a');
            a.setAttribute('href', url);
            const event = new MouseEvent('click', {
              ctrlKey: e.ctrlKey,
              shiftKey: e.shiftKey,
              metaKey: e.metaKey,
              altKey: e.altKey,
              cancelable: true,
            });
            const navigator = selfWindowNavigator(onSelfWindowNavigation);
            if (navigator) {
              a.addEventListener('click', (e) => navigator(e, url));
            }
            a.dispatchEvent(event);
          }
          if (onClick) {
            onClick();
          }
        }
      }}
      {...commonProps(props, baseClassName, classModifier)}
      {...filterTableRowAriaProps(props)}
      /* FIXME: role的にはクリック可能であることが伝わらないが、roleを変えるとテーブルとしての読み上げが上手くいかないおそれがある */
    >
      {children}
    </tr>
  ) : (
    <tr
      {...commonProps(props, baseClassName, classModifier)}
      {...filterTableRowAriaProps(props)}
      ref={ref}
    >
      {children}
    </tr>
  );
};

export default React.forwardRef(TableListRow);
