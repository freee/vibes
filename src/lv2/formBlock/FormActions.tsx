import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import ButtonGroup from '../buttonGroup/ButtonGroup';
import PopupBase from '../../lv1/bases/PopupBase';
import vbClassNames from '../../utilities/vbClassNames';
import { convertRemToPixel } from '../../utilities/convertRemToPixel';

type Props = {
  /**
   * position を使用してください。 position 指定時は無視されます。
   * @deprecated
   */
  fixed?: boolean;
  /**
   * 表示位置を指定します。
   */
  position?: 'static' | 'fixed' | 'sticky';
  /**
   * 指定するとブラウザ幅に応じてボタンの並び方が変わります。
   */
  responsive?: boolean;
  children?: React.ReactNode;
  /**
   * 水平方向の配置を指定します
   */
  align?: 'left' | 'center';
  /**
   * 固定表示時にボタンを配置する範囲を指定します。position が fixed or sticky の場合にのみ利用されます。
   */
  width?: 'normal' | 'narrow' | 'wide';
} & CommonProps;

const useSticky = (position: Props['position']) => {
  const [sticked, setSticked] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const el = ref.current;
    if (position !== 'sticky' || !el) {
      return;
    }
    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      // 固定配置する FormActions の表示を切り替えるスクロール位置を FormActions の高さと揃えるため 1rem 減算する（PopupBase の paddingSize 分）
      const sticked = window.innerHeight <= rect.top - convertRemToPixel(1);
      setSticked(sticked);
    };
    handleScroll();
    window.addEventListener('resize', handleScroll);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [position]);

  return { ref, sticked };
};

const InnerFixedWrapper = (
  {
    children,
    sticked,
    sticky,
  }: {
    children: React.ReactNode;
    sticked: boolean;
    sticky: boolean;
  },
  ref?: React.Ref<HTMLElement>
) =>
  sticky ? (
    <CSSTransition
      classNames="vb-formActions__animation"
      in={sticked}
      timeout={300}
      mountOnEnter
      unmountOnExit
      nodeRef={ref}
    >
      {children}
    </CSSTransition>
  ) : (
    <>{children}</>
  );
const FixedWrapper = React.forwardRef(InnerFixedWrapper);

const FormActions: React.FC<Props> = (props: Props) => {
  const { fixed, position: orgPosition, responsive, children, width } = props;

  const position = orgPosition ? orgPosition : fixed ? 'fixed' : 'static';

  const { ref: staticRef, sticked } = useSticky(position);
  const fixedRef = React.useRef<HTMLDivElement>(null);

  const hasFixedContent = position === 'fixed' || position === 'sticky';
  const hasStaticContent = position === 'static' || position === 'sticky';
  const hideStaticContent = position === 'sticky' && sticked;

  return (
    <>
      {hasFixedContent && (
        <FixedWrapper
          ref={fixedRef}
          sticked={sticked}
          sticky={position === 'sticky'}
        >
          <div
            {...commonProps(props, 'vb-formActions', {
              fixed: true,
              responsive,
            })}
            ref={fixedRef}
          >
            <PopupBase paddingSize="small">
              <div
                className={vbClassNames('vb-formActions__inner', {
                  modifier: {
                    widthNarrow: width === 'narrow',
                    widthWide: width === 'wide',
                  },
                })}
              >
                <ButtonGroup
                  align={props.align ?? 'center'}
                  responsive={responsive}
                >
                  {children}
                </ButtonGroup>
              </div>
            </PopupBase>
          </div>
        </FixedWrapper>
      )}
      {hasStaticContent && (
        <div
          {...commonProps(props, 'vb-formActions', {
            responsive,
          })}
          ref={staticRef}
          style={hideStaticContent ? { visibility: 'hidden' } : undefined}
        >
          <ButtonGroup align={props.align ?? 'left'} responsive={responsive}>
            {children}
          </ButtonGroup>
        </div>
      )}
    </>
  );
};
export default FormActions;
