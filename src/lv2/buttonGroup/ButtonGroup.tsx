import * as React from 'react';
import vbClassNames from '../../utilities/vbClassNames';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { MarginClassProps } from '../../utilities/marginClasses';

type Props = {
  children: React.ReactNodeArray | React.ReactNode;
  align?: 'left' | 'center';
  responsive?: boolean;
  /** レスポンシブビューで、画面幅が狭い場合のボタンの並び方を調整します。 `column` を指定した場合はすべてのボタンが縦に並び、`row` を指定した場合は最初の2つのボタンが横に並び、残りのボタンは縦に並びます */
  mobileButtonLayout?: 'row' | 'column';
} & MarginClassProps &
  CommonProps;

/** 主にレスポンシブビューを想定して、複数のボタンをグループ化して配置します。 */

const ButtonGroup: React.FC<Props> = (props: Props) => {
  const {
    children,
    align,
    responsive,
    mobileButtonLayout,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginSize,
  } = props;

  const childrenArray = React.Children.toArray(children);
  const baseClassName = 'vb-buttonGroup';

  return (
    <div
      {...commonProps(
        props,
        baseClassName,
        {
          responsive,
          alignLeft: align === 'left',
        },
        {
          marginBottom,
          marginLeft,
          marginRight,
          marginTop,
          marginSize,
        }
      )}
    >
      {childrenArray.length > 1 ? (
        <>
          <div
            className={vbClassNames(`${baseClassName}__topPair`, {
              modifier: { mobileButtonLayoutRow: mobileButtonLayout === 'row' },
            })}
          >
            {childrenArray.slice(0, 2).map(
              (child, i) =>
                child && ( // undefinedが来た場合に備えてnil guardしている
                  <div
                    key={i}
                    className={vbClassNames(`${baseClassName}__topItem`, {
                      modifier: {
                        mobileButtonLayoutRow: mobileButtonLayout === 'row',
                      },
                    })}
                  >
                    {child}
                  </div>
                )
            )}
          </div>
          {childrenArray.slice(2).map(
            (child, i) =>
              child && ( // undefinedが来た場合に備えてnil guardしている
                <div key={i + 2} className="vb-buttonGroup__item">
                  {child}
                </div>
              )
          )}
        </>
      ) : (
        children
      )}
    </div>
  );
};

export default ButtonGroup;
