import * as React from 'react';
import Modal from 'react-modal';
import useUniqueId from '../hooks/useUniqueId';
import { usePortalParentContext } from '../utilities/VibesProvider';

const overlayStyle: React.CSSProperties = {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
};
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

type DialogProps = {
  /**
   * ダイアログのid属性を指定します。
   * 指定しない場合は、重複しないように生成された文字列が使用されます。
   */
  id?: string;
  /**
   * アラートダイアログ（他のダイアログの上に表示されるダイアログ）の場合はtrueにしてください
   */
  alertDialog: boolean;
  render: (props: {
    /**
     * モーダルの固有のidが指定されます
     */
    id: string;
    /**
     * モーダルのタイトルを表示する要素のidが指定されます
     * aria-labelledbyに使用されるため、必ずタイトルを表示する要素にidとして渡してください
     */
    titleId: string;
  }) => React.ReactNode;
  /**
   * ダイアログの開閉状態を指定します
   */
  isOpen: boolean;
  /**
   * Close ボタンの click ハンドラを設定します。
   */
  onRequestClose: React.MouseEventHandler;
  /**
   * `true` のとき、ダイアログの外（オーバーレイ部分）のクリックまたは、Escキーの押下によりダイアログを閉じられるようにします。
   * ユーザーの意図しないタイミングで閉じられることがない場合のみ、`true` にしてください。
   */
  shouldCloseOnOverlayClickOrEsc: boolean;
  /**
   * ダイアログを閉じたときにフォーカスする要素を指定します。
   * 指定しない場合には、ダイアログが開く直前にフォーカスしていた要素にフォーカスします。
   */
  elementFocusAfterClose?: HTMLElement;
  /**
   * モーダルのaria-labelを指定できます。
   * 指定しなかった場合はaria-labelledbyによってタイトルの文言が参照されます。
   */
  contentLabel?: string;
  /**
   * react-modal の contentRef に渡す値です。
   */
  contentRef?: React.ComponentProps<typeof Modal>['contentRef'];
};

export type DialogContentProps = {
  /**
   * ダイアログのid属性を指定します。
   */
  id?: string;
  /**
   * ダイアログの見出しのid属性を指定します
   */
  titleId?: string;
} & Pick<DialogProps, 'onRequestClose'>;

const Dialog = (props: DialogProps) => {
  const {
    id,
    alertDialog,
    render,
    isOpen,
    onRequestClose,
    shouldCloseOnOverlayClickOrEsc,
    elementFocusAfterClose,
    contentRef,
  } = props;
  const uniqueId = useUniqueId('vb-Dialog', id);
  const portalParent = usePortalParentContext();
  const titleId = `${uniqueId}__title`;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      onAfterClose={() => {
        if (elementFocusAfterClose) {
          elementFocusAfterClose.focus();
        }
      }}
      style={{
        overlay: {
          ...overlayStyle,
          // $vbMessageModalZIndex もしくは $vbModalZIndex
          zIndex: alertDialog ? 1500 - 1 : 1000 - 1,
        },
        content: contentStyle,
      }}
      contentLabel={props.contentLabel}
      ariaHideApp={false}
      aria={{
        labelledby: props.contentLabel ? undefined : titleId,
      }}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClickOrEsc}
      shouldCloseOnEsc={shouldCloseOnOverlayClickOrEsc}
      // 閉じたときにフォーカスする要素が指定されている場合は、react-modalのフォーカスを戻す機構を使用しない
      shouldReturnFocusAfterClose={!elementFocusAfterClose}
      id={`${uniqueId}__screen`}
      bodyOpenClassName="vb-ReactModal__Body--open"
      parentSelector={() => portalParent}
      contentRef={contentRef}
      closeTimeoutMS={300}
    >
      {render({ id: uniqueId, titleId })}
    </Modal>
  );
};

export default Dialog;
