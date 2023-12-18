import * as React from 'react';
import StatusIcon, { StatusType } from '../icons/StatusIcon';
import { MdOpenInNew } from 'react-icons/md';
import { MarginClassProps } from '../../utilities/marginClasses';
import commonProps, { CommonProps } from '../../utilities/commonProps';

type Props = {
  selectableItemIndex?: number;
  children?: React.ReactNode;
  selected?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  statusIconText?: string;
  statusIconType?: StatusType;
  actionButton?: boolean;
  LeftIconComponent?: React.ElementType;
  FarRightIconComponent?: React.ElementType;
  bgTransparent?: boolean;
  onClick?: React.MouseEventHandler;
  selectableItemRef?: React.Ref<HTMLAnchorElement | HTMLButtonElement>;
  onKeyDown?: (
    e: React.KeyboardEvent<HTMLAnchorElement | HTMLButtonElement>,
    selectableItemIndex: number
  ) => void;
} & MarginClassProps &
  CommonProps;

/**
 * `lv2/ListButtons` および `lv2/ListButtonSelector` で使用される想定のボタンです。単独で使用しないでください
 */
const ListButton: React.FC<Props> = (props: Props) => {
  const {
    selectableItemIndex,
    children,
    selected,
    href,
    target,
    rel,
    statusIconText,
    statusIconType,
    actionButton,
    LeftIconComponent,
    FarRightIconComponent,
    bgTransparent,
    onClick,
    selectableItemRef,
    onKeyDown,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginSize,
  } = props;

  const buttonBaseClass = 'vb-listButton';
  const classModifier = {
    selected,
    bgTransparent,
    actionButton,
  };

  const buttonValue = (
    <React.Fragment>
      {LeftIconComponent ? (
        <LeftIconComponent className={buttonBaseClass + '__leftIcon'} />
      ) : null}
      {children}
      {statusIconText && (
        <StatusIcon type={statusIconType} marginLeft marginSize="small">
          {statusIconText}
        </StatusIcon>
      )}
      {FarRightIconComponent ? (
        <FarRightIconComponent className={buttonBaseClass + '__farRightIcon'} />
      ) : null}
    </React.Fragment>
  );

  return selected ? (
    <span
      aria-selected="true"
      role="option"
      {...commonProps(props, buttonBaseClass, classModifier, {
        marginBottom,
        marginLeft,
        marginRight,
        marginSize,
        marginTop,
      })}
    >
      {buttonValue}
    </span>
  ) : href ? (
    <a
      href={href}
      target={target ? target : '_self'}
      rel={rel}
      onClick={onClick}
      aria-selected={selected && true}
      role="option"
      ref={selectableItemRef as React.Ref<HTMLAnchorElement>}
      onKeyDown={(e: React.KeyboardEvent<HTMLAnchorElement>): void => {
        onKeyDown &&
          typeof selectableItemIndex === 'number' && // 0だと通らなくなってしまうのでtypeをみる
          onKeyDown(e, selectableItemIndex);
      }}
      {...commonProps(props, buttonBaseClass, classModifier, {
        marginBottom,
        marginLeft,
        marginRight,
        marginSize,
        marginTop,
      })}
    >
      {buttonValue}
      {target === '_blank' && (
        <MdOpenInNew className={buttonBaseClass + '__farRightIcon'} />
      )}
    </a>
  ) : (
    <button
      onClick={onClick}
      aria-selected={selected && true}
      role="option"
      type="button"
      ref={selectableItemRef as React.Ref<HTMLButtonElement>}
      onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>): void => {
        onKeyDown &&
          typeof selectableItemIndex === 'number' && // 0だと通らなくなってしまうのでtypeをみる
          onKeyDown(e, selectableItemIndex);
      }}
      {...commonProps(props, buttonBaseClass, classModifier, {
        marginBottom,
        marginLeft,
        marginRight,
        marginSize,
        marginTop,
      })}
    >
      {buttonValue}
    </button>
  );
};

export default ListButton;
