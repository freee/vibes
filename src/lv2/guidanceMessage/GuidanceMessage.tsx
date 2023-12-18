import * as React from 'react';
import commonProps, {
  CommonProps,
  pickCommonProps,
} from '../../utilities/commonProps';
import vbClassNames from '../../utilities/vbClassNames';
import selfWindowNavigator, {
  SelfWindowNavigationProp,
} from '../../utilities/selfWindowNavigator';
import IconOnlyButton from '../../lv1/buttons/IconOnlyButton';
import { MdClose } from 'react-icons/md';
import { useResponsive } from '../../utilities/VibesProvider';

type CloseButtonProps = Pick<
  Parameters<typeof IconOnlyButton>[0],
  'onClick' | 'small'
> &
  CommonProps;

const CloseButton: React.FC<CloseButtonProps> = (props: CloseButtonProps) => {
  const { onClick, small } = props;

  return (
    <IconOnlyButton
      IconComponent={MdClose}
      label="閉じる"
      small={small}
      appearance={'tertiary'}
      onClick={(e) => {
        onClick && onClick(e);
        e.stopPropagation();
      }}
      {...pickCommonProps(props)}
    ></IconOnlyButton>
  );
};

const CloseSmallButton: React.FC<CloseButtonProps> = (
  props: CloseButtonProps
) => {
  const { onClick } = props;

  return <CloseButton onClick={onClick} small />;
};

type Props = {
  /**
   * アイコンとして表示するコンポーネントを渡します。react-iconsのコンポーネントが想定されています。
   */
  IconComponent?: React.ElementType;
  /**
   * アイコンを除くコンテンツが入ります。
   * 内容には文字以外も含められ、配置も自由にできます。
   */
  children: React.ReactNode;
  /**
   * 閉じられる表示の場合に、CloseButtonを含む要素を入れます。
   * 内容に対してinlineに置くことも、改行して置くこともできます。
   */
  renderCloseButton?: (
    CloseButton?: React.FC<CloseButtonProps>
  ) => React.ReactNode;
  /**
   * inline-blockとして配置したい場合に指定します
   * デフォルトはblock要素です。
   */
  inline?: boolean;
  /**
   * 小さいサイズにしたい場合に指定します。
   * ユースケースとしてinlineが指定された場合を想定しているため、inlineを指定しないとsmallを有効にできません。
   * CloseButtonも合わせて小さくなります。
   */
  small?: boolean;
  /**
   * アイコンを含めたコンテンツの縦方向の揃えを指定できます。
   * 指定がない場合は'top'になります。
   */
  verticalAlign?: 'top' | 'middle';
  /**
   * GuidanceMessageの横幅を、中身に応じて可変にするか、親要素の幅まで広げるかを指定できます。
   * 指定がない場合は'fit-content'で、中身に応じて可変になります。
   */
  width?: 'fit-content' | 'full';
  /**
   * 表示全体をクリック可能にし、かつlinkとなる場合はurlで遷移先を指定できます。
   *
   * @deprecated
   * 全体をclickableとさせる使用は廃止となるため、指定しないようにしてください。
   */
  url?: string;
  /**
   * linkになる場合に、targetを指定します。
   *  @deprecated
   * 全体をclickableとさせる使用は廃止となるため、指定しないようにしてください。
   */
  target?: string;
  /**
   * rel を指定します
   *  @deprecated
   * 全体をclickableとさせる使用は廃止となるため、指定しないようにしてください。
   */
  rel?: string;
  /**
   * @deprecated
   * 全体をclickableとさせる使用は廃止となるため、指定しないようにしてください。
   */
  onClick?: React.MouseEventHandler;
} & SelfWindowNavigationProp &
  CommonProps;

/**
 * ## 注意点
 * ＊現状のGuidanceMessageを廃止予定です。clickできる場合とできない場合を見た目から判別することが難しいため、全体クリックの使用は廃止し、inlineでの配置に絞る形で新しく用意する見込みです。
 *
 * block要素として利用したい場合は、MessageBlockのリリース情報(discovery)/アシスタンス（assistance）で対応ください。
 *
 * 暫定対応として、以下のように利用ください。
 * - 全体をclickableとさせないよう、url / onClickは指定しないでください。
 * - inlineかつsmallを指定し、クリックさせたい要素はchildrenに含めてください。（文中にInlineLinkを渡す形を推奨しています）
 * - verticalAlignのdefaultは'top'ですが、inlineかつsmallで改行がない形では'middle'を指定してください。
 *
 */
const GuidanceMessage: React.FC<Props> = (props: Props) => {
  const {
    IconComponent,
    children,
    renderCloseButton,
    inline,
    small,
    verticalAlign = 'top',
    width = 'fit-content',
    url,
    target,
    rel,
    onClick,
    onSelfWindowNavigation,
  } = props;

  const className = 'vb-guidanceMessage';
  const responsive = useResponsive();
  const clickable = !!url || !!onClick;
  const isSmall = inline && small;

  const containerClassName = vbClassNames(`${className}__container`, {
    modifier: {
      responsive,
      small: isSmall,
      alignTop: verticalAlign === 'top',
      alignMiddle: verticalAlign === 'middle',
    },
  });

  const renderButton = (small?: boolean) =>
    renderCloseButton &&
    renderCloseButton(small ? CloseSmallButton : CloseButton);

  const renderIconComponent = (IconComponent?: React.ElementType) =>
    IconComponent && (
      <IconComponent
        className={vbClassNames(`${className}__icon`, {
          modifier: {
            small: isSmall,
          },
        })}
        focusable={false}
      />
    );

  return (
    <div
      {...commonProps(props, className, {
        inline,
        clickable,
        widthFitContent: width === 'fit-content',
        widthFull: width === 'full',
      })}
    >
      {clickable ? (
        url ? (
          <div className={containerClassName}>
            {renderIconComponent(IconComponent)}
            <span
              className={vbClassNames(`${className}__content`, {
                modifier: {
                  alignMiddle: verticalAlign === 'middle',
                },
              })}
            >
              <a
                className={`${className}__link`}
                href={url}
                target={target}
                rel={
                  rel
                    ? rel
                    : target === '_blank'
                    ? 'noopener noreferrer'
                    : undefined
                }
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  if (onClick) {
                    onClick(e);
                  }
                  const navigator = selfWindowNavigator(onSelfWindowNavigation);
                  if (navigator) {
                    navigator(e, url);
                  }
                }}
              >
                {children}
              </a>
              {renderButton(isSmall)}
            </span>
          </div>
        ) : (
          <div className={containerClassName}>
            {renderIconComponent(IconComponent)}
            <span
              className={vbClassNames(`${className}__content`, {
                modifier: {
                  alignMiddle: verticalAlign === 'middle',
                },
              })}
            >
              <button className={`${className}__button`} onClick={onClick}>
                {children}
              </button>
              {renderButton(isSmall)}
            </span>
          </div>
        )
      ) : (
        <div className={containerClassName}>
          {renderIconComponent(IconComponent)}
          <span
            className={vbClassNames(`${className}__content`, {
              modifier: {
                alignMiddle: verticalAlign === 'middle',
              },
            })}
          >
            {children}
            {renderButton(isSmall)}
          </span>
        </div>
      )}
    </div>
  );
};

export default GuidanceMessage;
