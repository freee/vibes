import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { StatusType } from '../../lv1/icons/StatusIcon';
import ListButton from '../../lv1/buttons/ListButton';

export type ButtonProps = {
  label: React.ReactNode;
  selected?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  statusIconText?: string;
  statusIconType?: StatusType;
  bgTransparent?: boolean;
  onClick?: React.MouseEventHandler;
};

type Props = {
  buttons: Array<ButtonProps>;
  selectableItemRef?: React.Ref<HTMLAnchorElement | HTMLButtonElement>;
  onKeyDown?: (
    e: React.KeyboardEvent<HTMLAnchorElement | HTMLButtonElement>,
    itemIndex: number
  ) => void;
} & MarginClassProps &
  CommonProps;

/**
 * `lv2/ListButtonSelector` で使用される想定のボタンです。単独で使用しないでください
 */
const ListButtons: React.FC<Props> = (props: Props) => {
  const {
    buttons,
    selectableItemRef,
    onKeyDown,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginSize,
  } = props;

  let selectableItemIdxCounter = 0;

  return (
    <div
      role="listbox"
      {...commonProps(
        props,
        'vb-listButtons',
        {},
        {
          marginTop,
          marginLeft,
          marginRight,
          marginBottom,
          marginSize,
        }
      )}
    >
      {buttons.map((contents, i) => {
        // 選択済み以外のもので何番めか
        const selectableItemIndex = contents.selected
          ? -1
          : selectableItemIdxCounter++;
        return (
          <ListButton
            key={i}
            selectableItemIndex={selectableItemIndex}
            href={contents.href}
            target={contents.target}
            rel={contents.rel}
            selected={contents.selected}
            statusIconText={contents.statusIconText}
            statusIconType={contents.statusIconType}
            onClick={contents.onClick}
            bgTransparent={i % 2 != 0}
            selectableItemRef={selectableItemRef}
            onKeyDown={onKeyDown}
          >
            {contents.label}
          </ListButton>
        );
      })}
    </div>
  );
};
export default ListButtons;
