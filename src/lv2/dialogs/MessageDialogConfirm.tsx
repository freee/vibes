import * as React from 'react';
import PageTitle from '../../lv1/typography/PageTitle';
import Button from '../../lv1/buttons/Button';
import Dialog, { DialogContentProps } from '../../utilities/Dialog';
import DialogBase from '../../lv1/bases/DialogBase';
import ButtonGroup from '../buttonGroup/ButtonGroup';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { useResponsive } from '../../utilities/VibesProvider';

type Props = {
  /**
   * ダイアログの見出しとなる文字列を指定します。（場合に応じて、アイコンを並べるなどもできます）
   */
  title: React.ReactNode;
  /**
   * ダイアログの本文となる要素を指定します。
   */
  children: React.ReactNode;
  /**
   * Confirm ボタンの click ハンドラを設定します。
   */
  onConfirm: React.MouseEventHandler;
  /**
   * Confirm ボタンのラベルとなる文字列を指定します。
   */
  confirmButtonLabel: string;
  /**
   * Confirm ボタンの押下時に遷移させるURLを指定します。指定した場合は `<a>` 要素、空文字列もしくはundefinedの場合は `<button>` 要素となります
   */
  confirmButtonHref?: string;
  /**
   * Confirm ボタンの target を設定します
   */
  confirmButtonTarget?: string;
  /**
   * Confirm ボタンの アイコンの配置箇所を設定します
   */
  confirmButtonIconPosition?: 'left' | 'right';
  /**
   * Confirm ボタンの アイコンとして表示するコンポーネントを渡します。react-iconsのコンポーネントが想定されています。
   */
  confirmButtonIconComponent?: React.ElementType;
  /**
   * Close ボタンのラベルとなる文字列を指定します。
   */
  closeButtonLabel: string;
  /**
   * Confirm ボタン、 Close ボタンともに disalbed に設定します。データの読み込み中や Confirm ボタンを押した後のレスポンス待ちの間など、ユーザーに何も操作させず待たせたいときに指定します。
   */
  disabled?: boolean;
  /**
   * Confirm ボタンのみを disalbed に設定します。Confirm 前に何かしらの操作が必要な場合など、「キャンセルはできるけど実行はできない」場合に指定します。
   */
  suspend?: boolean;
  /**
   * Confirm ボタンを danger に設定します。ボタンを押したものの動作が危険性を伴う場合に指定します。
   */
  danger?: boolean;
  /**
   * 指定するとブラウザ幅に応じてダイアログも狭くなります。指定しない場合の幅は 40 rem 固定です。
   */
  responsive?: boolean;
  /**
   * コンテントの揃えを指定できます。デフォルトはcenterですが、情報量が多いときなど左揃えにすることもできます。
   */
  contentAlign?: 'left';
  /**
   * ボタンのレスポンシブ時の並び方を指定できます。
   */
  mobileButtonLayout?: 'row' | 'column';
} & DialogContentProps &
  CommonProps;

export const MessageDialogConfirmContent: React.FC<Props> = (props: Props) => {
  const {
    id,
    titleId,
    title,
    children,
    onRequestClose,
    onConfirm,
    confirmButtonLabel,
    confirmButtonHref,
    confirmButtonTarget,
    confirmButtonIconPosition,
    confirmButtonIconComponent,
    closeButtonLabel,
    disabled,
    suspend,
    danger,
    contentAlign,
    mobileButtonLayout,
  } = props;
  const baseClassName = 'vb-messageDialog';
  // 雑にに書いてますが、各パーツをコンポーネントとして切り出すリファクタをする際に直します。
  const alignLeftClass =
    contentAlign === 'left' ? 'vb-messageDialog__body--alignLeft' : '';
  const responsive = useResponsive(props.responsive);
  return (
    <div
      {...commonProps(props, baseClassName, {
        responsive,
      })}
      id={id}
    >
      <DialogBase message paddingSize="zero">
        <div className={`${baseClassName}__inner`}>
          <div className={`${baseClassName}__header`}>
            <PageTitle id={titleId}>{title}</PageTitle>
          </div>
          <div
            className={`${baseClassName}__body ${alignLeftClass}`}
            // 表示領域が足りないときにスクロールするので、tabIndexをつける（キーボードでスクロールできるようになる）
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex={0}
          >
            {children}
          </div>
          <div className={`${baseClassName}__footer`}>
            <ButtonGroup
              responsive={responsive}
              mobileButtonLayout={mobileButtonLayout}
            >
              <Button
                onClick={onConfirm}
                disabled={!!disabled || !!suspend}
                primary={!danger}
                danger={!!danger}
                href={confirmButtonHref}
                target={confirmButtonTarget}
                iconPosition={confirmButtonIconPosition}
                IconComponent={confirmButtonIconComponent}
                hasMinWidth
              >
                {confirmButtonLabel}
              </Button>
              <Button
                hasMinWidth
                onClick={onRequestClose}
                disabled={!!disabled}
              >
                {closeButtonLabel}
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </DialogBase>
    </div>
  );
};

/**
 * 操作（タスク）の確認に用いるダイアログです
 *
 * - 確認が必要となる操作の例には、削除などの不可逆的な操作や支払いなど金銭が絡むなど操作が間違うとリスクを生む場合が当てはまります。
 * - 原則として確認はなるべく、短い質問で2択で答えるようにしましょう。（データの内容を表示するなど表示領域が必要な場合は、横幅は70remまで伸び縦にはスクロールが起こります）
 * - モーダルで行う必要のあるタスク自体には `TaskDialog` を使用してください
 * - TaskDialogよりも上に表示されるので、TaskDialogでの操作に対する確認としても使えます。
 *
 * ## accessibility
 * dialogが閉じた際、dialogが開く直前にフォーカスしていた要素（多くの場合はdialogを開かせたボタン）に戻るようになっています。
 *
 * ただし、UIの状態の変化等の理由でdialogが開く直前にフォーカスしていた要素に戻れない場合は、戻り先として適切な任意の要素を指定するようにしてください。(`elementFocusAfterClose`を使って指定できます)
 *
 */
const MessageDialogConfirm = (
  props: Omit<Props, 'titleId'> &
    Pick<
      Parameters<typeof Dialog>[0],
      'isOpen' | 'elementFocusAfterClose' | 'contentRef'
    >
) => (
  <Dialog
    id={props.id}
    alertDialog={true}
    contentRef={props.contentRef}
    shouldCloseOnOverlayClickOrEsc={false}
    isOpen={props.isOpen}
    onRequestClose={props.onRequestClose}
    elementFocusAfterClose={props.elementFocusAfterClose}
    render={(p) => <MessageDialogConfirmContent {...props} {...p} />}
  />
);
export default MessageDialogConfirm;
