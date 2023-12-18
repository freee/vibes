import * as React from 'react';
import { MdCancel } from 'react-icons/md';
import { Keys } from '../../utilities/keyboard';

import { MarginClassProps } from '../../utilities/marginClasses';
import commonProps, { CommonProps } from '../../utilities/commonProps';

type TagBoxMaxWidth = 'small' | 'medium' | 'large';
type TagBoxColor = 'success' | 'error' | AccentColor;
type AccentColor = 'RE' | 'OR' | 'YE' | 'YG' | 'GR' | 'BG' | 'PU' | 'GY';

type Props = {
  children?: string;
  onRemove?: () => any;
  disabledRemoveButton?: boolean;
  removable?: boolean;
  type?: string;
  maxWidth?: TagBoxMaxWidth;
  color?: TagBoxColor;
} & MarginClassProps &
  CommonProps;

const TagBox: React.FC<Props> = (props: Props) => {
  const {
    type,
    children,
    removable,
    onRemove,
    disabledRemoveButton,
    maxWidth,
    color,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginSize,
  } = props;
  const baseClass = 'vb-tagBox';
  const classModifier = {
    removable,
    maxWidthSmall: maxWidth === 'small',
    maxWidthMedium: maxWidth === 'medium' || !maxWidth,
    maxWidthLarge: maxWidth === 'large',
    success: color === 'success',
    error: color === 'error',
    RE: color === 'RE',
    OR: color === 'OR',
    YE: color === 'YE',
    YG: color === 'YG',
    GR: color === 'GR',
    BG: color === 'BG',
    PU: color === 'PU',
    GY: color === 'GY',
  };

  const isAccentColor = color && color !== 'success' && color !== 'error';

  const bodyClassName = color
    ? `${baseClass}__body ${baseClass}__body--${color}`
    : `${baseClass}__body`;

  const typeClassName = isAccentColor
    ? `${baseClass}__type ${baseClass}__type--${color}`
    : `${baseClass}__type`;

  const removeButtonColorClassName = isAccentColor
    ? ` ${baseClass}__removeButton--${color}`
    : '';

  return (
    <span
      {...commonProps(props, baseClass, classModifier, {
        marginBottom,
        marginLeft,
        marginRight,
        marginTop,
        marginSize,
      })}
    >
      <span className={`${baseClass}__inner`}>
        {type && <span className={typeClassName}>{type}</span>}
        <span className={bodyClassName} title={children}>
          {children}
        </span>
        {removable && (
          <span
            className={`${baseClass}__removeButton${
              disabledRemoveButton
                ? ` ${baseClass}__removeButton--disabled`
                : ''
            }${removeButtonColorClassName}`}
            aria-label={`${children || 'このタグ'}を削除`}
            tabIndex={disabledRemoveButton ? -1 : 0}
            role="button"
            onClick={() => onRemove && onRemove()}
            onKeyDown={(e) => {
              if (onRemove && (e.key === Keys.ENTER || e.key === Keys.SPACE)) {
                e.preventDefault();
                onRemove();
              }
            }}
          >
            <MdCancel className={`${baseClass}__removeIcon`} />
          </span>
        )}
      </span>
    </span>
  );
};

export default TagBox;
