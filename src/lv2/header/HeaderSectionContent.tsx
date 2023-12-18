import * as React from 'react';
import { VisuallyHidden } from '../../lv1';
import WithDropdown from './../withDropdown/WithDropdown';
import { SectionData } from './types';

type Props = {
  data: SectionData;
};

const HeaderSectionContents: React.FC<Props> = ({
  data: {
    dropdownContents,
    IconComponent,
    iconType,
    iconLabel,
    text,
    type,
    url,
    onClick,
    hasBadge,
  },
}: Props) => {
  const icon = IconComponent ? (
    <IconComponent
      className={`vb-header__icon ${
        iconType ? `vb-header__icon--${iconType}` : ''
      }`}
      role="img"
      aria-label={iconLabel || undefined}
      // iconLabelがあるときだけスクリーンリーダーからは画像として見え、そうでない場合はスクリーンリーダーからは見えなくする
      aria-hidden={!iconLabel}
      focusable={false}
    />
  ) : null;

  switch (type) {
    case 'plan':
      return (
        <a href={url} className="vb-header__plan">
          {text}
        </a>
      );
    case 'link':
      return (
        <a className="vb-header__link" href={url}>
          {icon}
          <span className="vb-header__text">{text}</span>
          {hasBadge && (
            <span className="vb-header__badge">
              <VisuallyHidden>新着情報あり</VisuallyHidden>
            </span>
          )}
        </a>
      );
    case 'button':
      return (
        <button
          className="vb-header__button"
          type="button"
          onClick={(): void => {
            onClick && onClick();
          }}
        >
          {icon}
          <span className="vb-header__text">{text}</span>
          {hasBadge && (
            <span className="vb-header__badge">
              <VisuallyHidden>新着情報あり</VisuallyHidden>
            </span>
          )}
        </button>
      );

    case 'dropdown': {
      if (!dropdownContents) {
        return null;
      }

      return (
        <WithDropdown
          dropdownContents={dropdownContents}
          renderButton={(dropdownId, isOpen, ref) => (
            <button
              className={`vb-header__button ${
                isOpen ? 'vb-header__button--active' : ''
              }`}
              type="button"
              aria-expanded={isOpen}
              aria-haspopup={true}
              aria-controls={dropdownId}
              ref={ref as React.Ref<HTMLButtonElement>}
            >
              {icon}
              <span className="vb-header__text">{text}</span>
              {hasBadge && (
                <span className="vb-header__badge">
                  <VisuallyHidden>新着情報あり</VisuallyHidden>
                </span>
              )}
            </button>
          )}
        />
      );
    }

    case 'text':
    default:
      return (
        <span>
          {icon}
          <span className="vb-header__text">{text}</span>
          {hasBadge && (
            <span className="vb-header__badge">
              <VisuallyHidden>新着情報あり</VisuallyHidden>
            </span>
          )}
        </span>
      );
  }
};
export default HeaderSectionContents;
