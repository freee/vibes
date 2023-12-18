import * as React from 'react';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { MarginClassProps } from '../../utilities/marginClasses';

export type SwallowProps = {
  /**
   * ロゴの大きさを指定します。`fit-width` と `fit-height` でそれぞれ親要素に対して100%となるよう表示します。
   */
  size?: 'medium' | 'fit-width' | 'fit-height';
} & CommonProps &
  MarginClassProps;

type Props = SwallowProps & {
  /**
   * サイズ無指定で配置した場合の高さを指定します。
   */
  mediumHeightRem: number;
  renderSVG: (props: {
    className: string;
    styles: React.CSSProperties;
  }) => React.ReactNode;
};

export const SwallowContainer: React.FC<Props> = (props: Props) => {
  const {
    size,
    mediumHeightRem,
    renderSVG,
    marginTop,
    marginRight,
    marginLeft,
    marginBottom,
    marginSize,
  } = props;

  const className = 'vb-swallow';

  const width = size === 'fit-width' ? '100%' : 'auto';
  const height =
    size === 'fit-height'
      ? '100%'
      : size === 'fit-width'
      ? 'auto'
      : `${mediumHeightRem}rem`;

  const styles: React.CSSProperties = {
    width: size === 'fit-width' ? '100%' : 'auto',
    height: size === 'fit-width' ? 'auto' : '100%',
  };

  return (
    <div
      {...commonProps(
        props,
        className,
        {},
        { marginTop, marginRight, marginLeft, marginBottom, marginSize }
      )}
      style={{
        width,
        height,
      }}
    >
      {renderSVG({ className: `${className}__svg`, styles })}
    </div>
  );
};
