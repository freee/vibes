import * as React from 'react';
import { DropdownContent } from './types';
import { MdOpenInNew } from 'react-icons/md';
import CheckBox from '../../lv1/forms/CheckBox';
import MaterialIcon from '../../lv1/icons/MaterialIcon';
import { pickCommonDataProps } from '../../utilities/commonProps';
import selfWindowNavigator from '../../utilities/selfWindowNavigator';

type Props = {
  content: DropdownContent;
  onKeyDown: (
    e: React.KeyboardEvent<
      HTMLButtonElement | HTMLAnchorElement | HTMLInputElement
    >
  ) => void;
  selectableItemRef?: React.Ref<
    HTMLButtonElement | HTMLAnchorElement | HTMLInputElement
  >;
  onRequestClose?: () => void;
};

const Item: React.FC<Props> = ({
  content,
  onKeyDown,
  selectableItemRef,
  onRequestClose,
}: Props) => {
  const baseClass = 'vb-dropdownItem';
  switch (content.type) {
    case 'rule':
      return (
        <li className={`${baseClass} ${baseClass}--rule`} role="separator" />
      );
    case 'textOnly':
      return (
        <li
          className={`${baseClass}${
            content.unread ? ` ${baseClass}--unread` : ''
          }`}
          role="menuitem"
        >
          <span
            className={`${baseClass}__text`}
            {...pickCommonDataProps(content)}
          >
            {content.text}
          </span>
        </li>
      );
    case 'checkbox':
      return (
        <li className={`${baseClass} ${baseClass}--checkbox`} role="menuitem">
          <span className={`${baseClass}__checkBoxItem`}>
            <CheckBox
              value={content.value}
              checked={content.checked}
              onChange={content.onChange}
              name={content.name}
              disabled={content.disabled}
              onKeyDown={onKeyDown}
              ref={selectableItemRef as React.Ref<HTMLInputElement>}
              {...pickCommonDataProps(content)}
            >
              {content.text}
            </CheckBox>
          </span>
        </li>
      );
    case 'selectable':
    default: {
      const unreadClass = content.unread ? ` ${baseClass}--unread` : '';
      const disabledClass = content.disabled ? ` ${baseClass}--disabled` : '';
      const dangerContentClass = content.danger
        ? ` ${baseClass}__content--danger`
        : '';

      return (
        <li
          className={`${baseClass} ${baseClass}--selectable ${unreadClass} ${disabledClass}`}
          role="menuitem"
        >
          {content.url ? (
            <a
              href={content.url}
              target={content.target}
              className={`${baseClass}__selectable${
                content.target === '_blank'
                  ? ` ${baseClass}__selectable--rightIcon`
                  : ''
              }`}
              onClick={(e) => {
                content.onClick && content.onClick(e);
                if (onRequestClose && !content.disableOnRequestClose) {
                  onRequestClose();
                }
                const navigator = selfWindowNavigator(
                  content.onSelfWindowNavigation
                );
                navigator && navigator(e, content.url);
              }}
              onKeyDown={(
                e: React.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>
              ): void => {
                onKeyDown(e);
              }}
              ref={selectableItemRef as React.Ref<HTMLAnchorElement>}
              aria-label={content.ariaLabel ? content.ariaLabel : undefined}
              rel={content.rel}
              {...pickCommonDataProps(content)}
            >
              {content.target === '_blank' && (
                <span className={`${baseClass}__rightIcon`}>
                  <MaterialIcon IconComponent={MdOpenInNew} />
                </span>
              )}
              <span className={`${baseClass}__content`}>{content.text}</span>
            </a>
          ) : (
            <button
              className={`${baseClass}__selectable`}
              type="button"
              disabled={content.disabled}
              onClick={(e) => {
                content.onClick && content.onClick(e);
                if (onRequestClose && !content.disableOnRequestClose) {
                  onRequestClose();
                }
              }}
              onKeyDown={(
                e: React.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>
              ): void => {
                onKeyDown(e);
              }}
              ref={selectableItemRef as React.Ref<HTMLButtonElement>}
              aria-label={content.ariaLabel ? content.ariaLabel : undefined}
              {...pickCommonDataProps(content)}
            >
              <span className={`${baseClass}__content ${dangerContentClass}`}>
                {content.text}
              </span>
            </button>
          )}
        </li>
      );
    }
  }
};
export default Item;
