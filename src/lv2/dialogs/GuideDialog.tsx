import * as React from 'react';
import { MdClose } from 'react-icons/md';
import Button from '../../lv1/buttons/Button';
import MarginBase from '../../lv1/bases/MarginBase';
import PageTitle from '../../lv1/typography/PageTitle';
import IconOnlyButton from '../../lv1/buttons/IconOnlyButton';
import DialogBase from '../../lv1/bases/DialogBase';
import Dialog, { DialogContentProps } from '../../utilities/Dialog';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import GuideStepCount from './parts/GuideStepCount';

type Props = {
  /**
   * ダイアログの見出しとなる文字列を指定します。
   */
  title: string;
  /**
   * レイアウトのタイプを指定します。指定しない場合はstepとなります。
   * （start: 始点用、ステップ番号と戻るボタンなし, step: ステップ用）
   */
  type?: 'start' | 'step';
  /**
   * ダイアログの本文となる要素を指定します。
   */
  children: React.ReactNode;
  /**
   * 現在のステップ番号を指定します。
   */
  stepCount?: number;
  /**
   * 合計ステップ数を指定します。
   * stepCount / totalStepCount で表示されます。
   */
  totalStepCount?: number;
  /**
   * 戻るボタンの click ハンドラを設定します。省略した場合はボタンは表示されません。
   */
  onRequestBackward?: React.MouseEventHandler;
  /**
   * 戻るボタンのラベルとなる文字列を指定します。
   */
  backwardButtonLabel?: string;
  /**
   * 次へボタンの click ハンドラを設定します。省略した場合はボタンは表示されません。
   */
  onRequestForward?: React.MouseEventHandler;
  /**
   * 次へボタンのラベルとなる文字列を指定します。
   */
  forwardButtonLabel?: string;
  /**
   * Close ボタンの click ハンドラを設定します。
   */
  onRequestClose: React.MouseEventHandler;
  /**
   * Close ボタンのラベルとなる文字列を指定します。
   */
  closeButtonLabel: string;
  /**
   * ダイアログ内に表示する画像を指定します。
   */
  image?: {
    /**
     * 画像のURLを指定します。
     */
    src: string;
    /**
     * 画像の横幅を指定します。
     */
    width?: string;
    /**
     * 画像の縦幅を指定します。
     */
    height?: string;
    /**
     * 画像のaltを指定します。
     */
    alt: string;
  };
} & DialogContentProps &
  CommonProps;

export const GuideDialogContent: React.FC<Props> = ({
  id,
  titleId,
  title,
  type,
  children,
  stepCount,
  totalStepCount,
  onRequestBackward,
  backwardButtonLabel,
  onRequestForward,
  forwardButtonLabel,
  onRequestClose,
  closeButtonLabel,
  image,
  ...props
}: Props) => (
  <div {...commonProps(props, 'vb-guideDialog', { responsive: true })} id={id}>
    <DialogBase message>
      <div className="vb-guideDialog__inner">
        <div className="vb-guideDialog__closeButtonBlock">
          <IconOnlyButton
            appearance="tertiary"
            IconComponent={MdClose}
            label="閉じる"
            onClick={onRequestClose}
            mt={-0.5}
            mr={-0.5}
          />
        </div>

        <div
          className={'vb-guideDialog__body'}
          // 表示領域が足りないときにスクロールするので、tabIndexをつける（キーボードでスクロールできるようになる）
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          tabIndex={0}
        >
          {image && (
            <img
              className="vb-guideDialog__image"
              src={image.src}
              alt={image.alt}
              style={{
                width: image.width,
                height: image.height,
              }}
            />
          )}
          <PageTitle mb={1.5} id={titleId}>
            {title}
          </PageTitle>
          {children}
        </div>

        {type === 'start' ? (
          <>
            {onRequestForward && (
              <MarginBase mt={1}>
                <Button
                  hasMinWidth
                  appearance="primary"
                  onClick={onRequestForward}
                >
                  {forwardButtonLabel || '次へ'}
                </Button>
              </MarginBase>
            )}
            <MarginBase mt={1}>
              <Button onClick={onRequestClose}>{closeButtonLabel}</Button>
            </MarginBase>
          </>
        ) : (
          <>
            {stepCount && totalStepCount && totalStepCount > 1 && (
              <GuideStepCount
                stepCount={stepCount}
                totalStepCount={totalStepCount}
                mt={1}
              />
            )}
            <div className="vb-guideDialog__buttonBlock">
              <MarginBase mt={1}>
                {onRequestBackward && (
                  <Button hasMinWidth onClick={onRequestBackward}>
                    {backwardButtonLabel || '戻る'}
                  </Button>
                )}
              </MarginBase>
              <MarginBase mt={1}>
                {onRequestForward ? (
                  <Button
                    hasMinWidth
                    appearance="primary"
                    onClick={onRequestForward}
                  >
                    {forwardButtonLabel || '次へ'}
                  </Button>
                ) : (
                  <Button
                    hasMinWidth
                    appearance="primary"
                    onClick={onRequestClose}
                  >
                    {closeButtonLabel || '閉じる'}
                  </Button>
                )}
              </MarginBase>
            </div>
          </>
        )}
      </div>
    </DialogBase>
  </div>
);

/**
 * チュートリアルなどのガイドで使用します。
 *
 * - `isOpen` propで開閉します
 *
 * ## accessibility
 * dialogが閉じた際、dialogが開く直前にフォーカスしていた要素（多くの場合はdialogを開かせたボタン）に戻るようになっています。
 *
 * ただし、UIの状態の変化等の理由でdialogが開く直前にフォーカスしていた要素に戻れない場合は、戻り先として適切な任意の要素を指定するようにしてください。(`elementFocusAfterClose`を使って指定できます)
 *
 */
const GuideDialog = (
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
    shouldCloseOnOverlayClickOrEsc={true}
    isOpen={props.isOpen}
    onRequestClose={props.onRequestClose}
    elementFocusAfterClose={props.elementFocusAfterClose}
    render={(p) => <GuideDialogContent {...props} {...p} />}
  />
);
export default GuideDialog;
