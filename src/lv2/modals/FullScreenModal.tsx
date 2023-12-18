import * as React from 'react';
import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import useUniqueId from '../../hooks/useUniqueId';
import { IconOnlyButton, PageTitle, WithSideContent } from '../../';
import { usePortalParentContext } from '../../utilities/VibesProvider';

const contentStyle: React.CSSProperties = {
  alignSelf: 'center',
  position: 'static',
  background: 'transparent',
  borderRadius: 0,
  border: 0,
  top: 'auto',
  left: 'auto',
  right: 'auto',
  bottom: 'auto',
  padding: 0,
  margin: 'auto',
};

type Props = {
  /**
   * モーダルのid属性を指定します。
   */
  id?: string;
  /**
   * モーダルの見出しのid属性を指定します
   */
  titleId?: string;
  /**
   * モーダルのaria-labelを指定できます。
   * 指定しなかった場合はaria-labelledbyによってタイトルの文言が参照されます。
   */
  contentLabel?: string;
  /**
   * モーダルの見出しとなります。
   * 基本は文字列のみの想定ですが、用途に応じて他の要素を合わせて表示もできます。
   */
  title: React.ReactNode;
  /**
   * モーダルの本文となる要素を指定します。
   */
  children: React.ReactNode;
  /**
   * プライマリボタン、 Close ボタンともに disalbed に設定します。データの読み込み中やプライマリボタンを押した後のレスポンス待ちの間など、ユーザーに何も操作させず待たせたいときに指定します。
   */
  disabled?: boolean;
  /**
   * Esc キーの押下でモーダルを閉じられるようになります。
   *
   *  - 無指定の場合は `false` の状態になっています
   *  - モーダル内にフォーム等がある状態で `true` にする場合は、変更がある場合に確認ダイアログを出すなどして、Esc キーの押下によって作業内容が不意に消えてしまうようなことが起きないようにしてください
   *  - モーダル内にフォーム等がない場合や、フォーム等の値に変更がない場合は、 `true` にして問題ありません
   */
  shouldCloseOnEsc?: boolean;
  /**
   * Close ボタンの click ハンドラを設定します。
   */
  onRequestClose: React.MouseEventHandler;
  /**
   * ヘッダーに右寄せでコンテンツを配置したい場合に使います。
   */
  headerSideContent?: React.ReactNode;
  /**
   * react-modal の contentRef に渡す値です。
   */
  contentRef?: React.ComponentProps<typeof Modal>['contentRef'];
} & CommonProps;

const FullScreenModalContent: React.FC<Props> = (props: Props) => {
  const {
    id,
    titleId,
    title,
    children,
    onRequestClose,
    disabled,
    headerSideContent,
  } = props;
  const baseClassName = 'vb-fullScreenModal';

  const headerRef = React.useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = React.useState<string>('85px');

  const adjustBodyHeight = () => {
    if (headerRef.current) {
      setHeaderHeight(`${headerRef.current.offsetHeight}px`);
    }
  };

  React.useLayoutEffect(() => {
    adjustBodyHeight();
  }, []);

  return (
    <div {...commonProps(props, baseClassName)} id={id}>
      <div className={`${baseClassName}__inner`}>
        <div className={`${baseClassName}__header`} ref={headerRef}>
          <IconOnlyButton
            IconComponent={MdClose}
            label={'閉じる'}
            appearance="tertiary"
            onClick={onRequestClose}
            disabled={!!disabled}
            mr={1}
          />
          <div className={`${baseClassName}__headerInnerContent`}>
            {headerSideContent ? (
              <WithSideContent sideContent={headerSideContent}>
                <PageTitle id={titleId}>{title}</PageTitle>
              </WithSideContent>
            ) : (
              <PageTitle id={titleId}>{title}</PageTitle>
            )}
          </div>
        </div>
        {/* 表示領域が足りないときにスクロールするので、tabIndexをつける（キーボードでスクロールできるようになる） */}
        <div
          className={`${baseClassName}__body`}
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          tabIndex={0}
          style={{
            // header の高さと、body に設定された上下の padding の合計を除いた値を minHeight に設定する
            minHeight: `calc(100vh - ${headerHeight} - 3rem)`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

/**
 * TaskDialogに収まりきらないような大きくて複雑なコンテンツをモーダル上に配置したい時に使用します。
 * コンテンツ部分は大きくなるとスクロールします。
 *
 * - `isOpen` propで開閉します
 */
const FullScreenModal = (
  props: Omit<Props, 'titleId'> & { isOpen: boolean }
) => {
  const uniqueId = useUniqueId('vb-Modal', props.id);
  const portalParent = usePortalParentContext();
  const titleId = `${uniqueId}__title`;

  return (
    <Modal
      {...props}
      style={{
        overlay: {
          display: 'flex',
          // $vbModalZIndex
          zIndex: 1000 - 1,
        },
        content: contentStyle,
      }}
      ariaHideApp={false}
      aria={{
        modal: true,
        labelledby: !props.contentLabel ? titleId : undefined,
      }}
      shouldCloseOnEsc={!!props.shouldCloseOnEsc}
      id={`${uniqueId}__screen`}
      bodyOpenClassName="vb-ReactModal__Body--open"
      parentSelector={() => portalParent}
      closeTimeoutMS={300}
    >
      <FullScreenModalContent {...props} {...{ id: uniqueId, titleId }} />
    </Modal>
  );
};

export default FullScreenModal;
