import * as React from 'react';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { MarginClassProps } from '../../utilities/marginClasses';
import { MessageTypes } from '../../lv1/messages/Message';
import Button from '../../lv1/buttons/Button';
import {
  MdOpenInNew,
  MdError,
  MdWarning,
  MdCheckCircle,
  MdInfo,
  MdLightbulb,
  MdCardGiftcard,
} from 'react-icons/md';
import { useResponsive } from '../../utilities/VibesProvider';
import vbClassNames from '../../utilities/vbClassNames';
import { SelfWindowNavigationProp } from '../../utilities/selfWindowNavigator';

type InternalMessageProps = {
  children?: React.ReactNode;
  assistance?: boolean;
  discovery?: boolean;
  explanatory?: boolean;
} & MessageTypes;

const InternalMessage: React.FC<InternalMessageProps> = (
  props: InternalMessageProps
) => {
  const {
    children,
    error,
    notice,
    success,
    assistance,
    discovery,
    explanatory,
  } = props;
  return (
    <div className="vb-messageBlockInternalMessage">
      <div className="vb-messageBlockInternalMessage__inner">
        {error ? (
          <MdError className="vb-messageBlockInternalMessage__icon vb-messageBlockInternalMessage__icon--alert" />
        ) : notice ? (
          <MdWarning className="vb-messageBlockInternalMessage__icon vb-messageBlockInternalMessage__icon--notice" />
        ) : success ? (
          <MdCheckCircle className="vb-messageBlockInternalMessage__icon vb-messageBlockInternalMessage__icon--success" />
        ) : assistance ? (
          <MdLightbulb className="vb-messageBlockInternalMessage__icon vb-messageBlockInternalMessage__icon--assistance" />
        ) : discovery ? (
          <MdCardGiftcard className="vb-messageBlockInternalMessage__icon vb-messageBlockInternalMessage__icon--discovery" />
        ) : explanatory ? (
          <MdInfo className="vb-messageBlockInternalMessage__icon vb-messageBlockInternalMessage__icon--explanatory" />
        ) : (
          <MdInfo className="vb-messageBlockInternalMessage__icon vb-messageBlockInternalMessage__icon--info" />
        )}
        <span className="vb-messageBlockInternalMessage__content">
          {children}
        </span>
      </div>
    </div>
  );
};

type Props = (
  | {
      /**
       * メッセージ本文
       */
      children: React.ReactNode;
      message?: undefined;
    }
  | {
      children?: undefined;
      /**
       * @deprecated children を使用してください
       */
      message: React.ReactNode;
    }
) & {
  assistance?: boolean;
  discovery?: boolean;
  explanatory?: boolean;
  linkTitle?: string;
  linkUrl?: string;
  linkTarget?: string;
  linkRel?: string;
  onLinkClick?: () => any;
  onRequestClose?: () => any;
  /**
   * @deprecated shadowが入る表示はFloatingMessageBlockを使用してください。FloatingMessageBlock側でスタイルが付くので指定は不要です。
   */
  hover?: boolean;
} & MessageTypes &
  MarginClassProps &
  SelfWindowNavigationProp &
  CommonProps;

/**
 * セクションメッセージまたはスクリーンメッセージとして使用するコンポーネントです。
 * ただしスクリーンメッセージに関しては `FloatingMessageBlock` を使用してください（このコンポーネントを内包しています）
 *
 * - 画面の大きな部分（セクション）に関するメッセージを表示します
 *   - エラーメッセージに使用する場合には、このコンポーネントではエラーの概要を表示するに留め、
 *     エラーの発生箇所の近くにインラインメッセージとして `Message` コンポーネントを配置して、詳細を伝えてください
 * - 右側にはメッセージの詳細リンクを配置できます。`linkTarget` を `"_blank"` にした場合には OpenInNew アイコンが表示されます。
 * - メッセージを非表示にできるようにする場合は、 `onRequestClose` を渡して「閉じる」ボタンを表示してください
 *
 */
const MessageBlock: React.FC<Props> = (props: Props) => {
  const {
    children,
    message,
    assistance,
    discovery,
    explanatory,
    linkTitle,
    linkUrl,
    linkTarget,
    linkRel,
    onLinkClick,
    onRequestClose,
    hover,
    onSelfWindowNavigation,
  } = props;
  const { error, notice, success } = props;
  const { marginTop, marginBottom, marginLeft, marginRight, marginSize } =
    props;
  const responsive = useResponsive();

  return (
    <div
      {...commonProps(
        props,
        'vb-messageBlock',
        { responsive, hover },
        {
          marginBottom,
          marginLeft,
          marginRight,
          marginSize,
          marginTop,
        }
      )}
    >
      <div
        className={vbClassNames('vb-messageBlock__inner', {
          modifier: {
            responsive,
            success: success,
            alert: error,
            notice: notice,
            assistance: assistance,
            discovery: discovery,
          },
        })}
      >
        <div className="vb-messageBlock__message">
          <InternalMessage
            error={error}
            notice={notice}
            success={success}
            assistance={assistance}
            discovery={discovery}
            explanatory={explanatory}
          >
            {children || message}
          </InternalMessage>
        </div>
        {((linkTitle && (linkUrl || onLinkClick || onSelfWindowNavigation)) ||
          onRequestClose) && (
          <div
            className={vbClassNames('vb-messageBlock__buttons', {
              modifier: { responsive },
            })}
          >
            {linkTitle && (linkUrl || onLinkClick || onSelfWindowNavigation) && (
              <Button
                appearance="tertiary"
                href={linkUrl}
                onClick={onLinkClick}
                target={linkTarget}
                rel={linkRel}
                IconComponent={
                  linkTarget === '_blank' ? MdOpenInNew : undefined
                }
                iconPosition="right"
                ml={0.5}
                onSelfWindowNavigation={onSelfWindowNavigation}
              >
                {linkTitle}
              </Button>
            )}
            {onRequestClose && (
              <Button onClick={onRequestClose} appearance="tertiary" ml={0.5}>
                閉じる
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default MessageBlock;
