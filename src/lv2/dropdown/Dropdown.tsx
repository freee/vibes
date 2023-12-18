import * as React from 'react';
import PopupBase from '../../lv1/bases/PopupBase';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import DropdownMenuContent from './DropdownMenuContent';
import { Keys } from '../../utilities/keyboard';

type Props = Pick<
  Parameters<typeof DropdownMenuContent>[0],
  'contents' | 'firstSelectableItemRef' | 'onRequestClose'
> & {
  align?: 'left' | 'right';
  positionRelative?: boolean;
} & CommonProps;

/**
 * ドロップダウンメニューのコンポーネントです。
 *
 * 「ボタンを押したらメニューが表示される」UIであれば、DropdownButtonコンポーネントを使用してください。
 */
const Dropdown: React.FC<Props> = (props: Props) => {
  const {
    firstSelectableItemRef,
    onRequestClose,
    contents,
    align,
    positionRelative,
  } = props;
  return (
    <div
      {...commonProps(props, 'vb-dropdown', {
        alignRight: align === 'right',
        positionRelative,
      })}
    >
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        className="vb-dropdown__body"
        onKeyDown={(e) =>
          e.key === Keys.ESC && onRequestClose && onRequestClose()
        }
      >
        <PopupBase paddingSize="zero">
          <DropdownMenuContent
            contents={contents}
            onRequestClose={onRequestClose}
            onFocusOut={onRequestClose}
            firstSelectableItemRef={firstSelectableItemRef}
          />
        </PopupBase>
      </div>
    </div>
  );
};
export default Dropdown;
