import * as React from 'react';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import { Keys } from '../../utilities/keyboard';
import useUniqueId from '../../hooks/useUniqueId';
import { MarginClassProps } from '../../utilities/marginClasses';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import AnimateHeight from 'react-animate-height';
import { useLang, useResponsive } from '../../utilities/VibesProvider';
import vbClassNames from '../../utilities/vbClassNames';

type Props = {
  title: React.ReactNode;
  children?: React.ReactNode;
  open?: boolean;
  /**
   * border を表示するか
   */
  border?: 'both' | 'bottom' | 'top';
  /**
   * @deprecated この値を指定しても何も変わりません
   */
  small?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: () => any;
} & MarginClassProps &
  CommonProps;

const AccordionPanel: React.FC<Props> = (props: Props) => {
  const {
    title,
    children,
    open,
    border,
    small,
    onClick,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginSize,
  } = props;

  const baseClass = 'vb-accordionPanel';
  const uid = useUniqueId(baseClass);
  const Icon = open ? MdExpandLess : MdExpandMore;
  const lang = useLang();
  return (
    <div
      {...commonProps(
        props,
        baseClass,
        {
          open,
          borderBoth: border === 'both',
          borderBottom: border === 'bottom',
          borderTop: border === 'top',
          small,
          close: !open,
        },
        { marginTop, marginLeft, marginRight, marginBottom, marginSize }
      )}
    >
      <div
        className={vbClassNames(`${baseClass}__title`, {
          modifier: { responsive: useResponsive() },
        })}
        aria-controls={`${uid}__description`}
        aria-expanded={open}
        tabIndex={0}
        role="button"
        onClick={onClick}
        onKeyDown={(e): void => {
          if (e.key === Keys.SPACE || e.key === Keys.ENTER) {
            e.preventDefault();
            onClick();
          }
        }}
      >
        {title}
        <Icon
          className={vbClassNames(`${baseClass}__icon`, {
            modifier: { responsive: useResponsive() },
          })}
          role="img"
          aria-label={
            lang === 'ja'
              ? open
                ? 'クリックで閉じる'
                : 'クリックで開く'
              : open
              ? 'Click to close'
              : 'Click to open'
          }
        />
      </div>
      <AnimateHeight
        duration={open ? 200 : 150}
        height={open ? 'auto' : 0}
        animateOpacity={true}
      >
        <div
          className={vbClassNames(`${baseClass}__description`, {
            modifier: { responsive: useResponsive() },
          })}
          id={`${uid}__description`}
          aria-hidden={!open}
        >
          {children}
        </div>
      </AnimateHeight>
    </div>
  );
};

export default AccordionPanel;
