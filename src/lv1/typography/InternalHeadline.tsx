import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { useResponsive } from '../../utilities/VibesProvider';

type HeadlineProps = {
  children?: React.ReactNode;
  className: string;
  id?: string;
  inline?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  headlineLevel: 1 | 2 | 3 | 4 | 5 | 6 | -1;
} & CommonProps &
  MarginClassProps;

/**
 * 他の headline の基底コンポーネント。vibes のコンポーネントとしては export していないので storybook も作成していない。
 */
function InternalHeadline(
  props: HeadlineProps,
  ref?: React.Ref<HTMLHeadingElement>
): React.ReactElement {
  const {
    children,
    className,
    id,
    inline,
    textAlign,
    headlineLevel,
    marginTop,
    marginRight,
    marginLeft,
    marginBottom,
    marginSize,
  } = props;

  const elementProps = {
    ...commonProps(
      props,
      className,
      {
        inline,
        responsive: useResponsive(),
        alignLeft: textAlign === 'left',
        alignRight: textAlign === 'right',
        alignCenter: textAlign === 'center',
      },
      { marginTop, marginRight, marginLeft, marginBottom, marginSize }
    ),
    id,
    ref,
    tabIndex: -1,
  };
  switch (headlineLevel) {
    case 1:
      return <h1 {...elementProps}>{children}</h1>;
    case 2:
      return <h2 {...elementProps}>{children}</h2>;
    case 3:
      return <h3 {...elementProps}>{children}</h3>;
    case 4:
      return <h4 {...elementProps}>{children}</h4>;
    case 5:
      return <h5 {...elementProps}>{children}</h5>;
    case 6:
      return <h6 {...elementProps}>{children}</h6>;
    default:
      return <span {...elementProps}>{children}</span>;
  }
}

export default React.forwardRef<HTMLHeadingElement, HeadlineProps>(
  InternalHeadline
);
