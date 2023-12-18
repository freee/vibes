import * as React from 'react';
import { MdCancel } from 'react-icons/md';
import { Keys } from '../../utilities/keyboard';

import { MarginClassProps } from '../../utilities/marginClasses';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { Avatar } from '../../lv1';

type PersonTagColor = 'success' | 'error';

type Props = {
  children?: string;
  onRemove?: () => any;
  disabledRemoveButton?: boolean;
  removable?: boolean;
  type?: string;
  color?: PersonTagColor;
  imageUrl: string;
} & MarginClassProps &
  CommonProps;

const PersonTag: React.FC<Props> = (props: Props) => {
  const {
    type,
    children,
    removable,
    onRemove,
    disabledRemoveButton,
    color,
    imageUrl,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginSize,
  } = props;
  const baseClass = 'vb-personTag';
  const classModifier = {
    removable,
    success: color === 'success',
    error: color === 'error',
  };

  const bodyClassName = color
    ? `${baseClass}__body ${baseClass}__body--${color}`
    : `${baseClass}__body`;

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
        <Avatar imageUrl={imageUrl} size="small" mr={0.25} />
        {type && <span className={`${baseClass}__type`}>{type}</span>}
        <span className={bodyClassName} title={children}>
          {children}
        </span>
        {removable && (
          <span
            className={`${baseClass}__removeButton${
              disabledRemoveButton
                ? ` ${baseClass}__removeButton--disabled`
                : ''
            }`}
            aria-label={`${children || 'この人'}を削除`}
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

export default PersonTag;
