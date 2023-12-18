import * as React from 'react';

import { MdOpenInNew, MdEdit, MdCheck, MdCancel } from 'react-icons/md';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';

import MessageDialogConfirm, {
  MessageDialogConfirmContent,
} from './MessageDialogConfirm';
import Paragraph from '../../lv1/typography/Paragraph';
import { commonKnobs } from '../../../stories';
import ToggleDialog from './ToggleDialog';
import TaskDialog from './TaskDialog';
import ColumnBase from '../../lv1/bases/ColumnBase';
import { VibesProvider } from '../../utilities';
import { Button, SectionTitle, WithSideContent } from '../../lv1';

export default {
  component: MessageDialogConfirm,
};

export const MessageDialogConfirmComponent = () => (
  <ToggleDialog
    render={(isOpen, toggle) => (
      <MessageDialogConfirm
        id={text('Id', '', 'MessageDialogConfirm')}
        isOpen={isOpen}
        title={text(
          'Title',
          'タスクダイアログ（確認）',
          'MessageDialogConfirm'
        )}
        onRequestClose={toggle}
        onConfirm={action('confirm')}
        closeButtonLabel={text(
          'CloseButtonLabel',
          'キャンセル',
          'MessageDialogConfirm'
        )}
        confirmButtonLabel={text(
          'ConfirmButtonLabel',
          'OK',
          'MessageDialogConfirm'
        )}
        confirmButtonHref={text(
          'ConfirmButtonHref',
          '',
          'MessageDialogConfirm'
        )}
        confirmButtonTarget={select(
          'ConfirmButtonTarget',
          {
            _blank: '_blank',
            _self: '_self',
          },
          '_self',
          'MessageDialogConfirm'
        )}
        confirmButtonIconComponent={
          boolean('ConfirmButtonWithIcon', false, 'MessageDialogConfirm')
            ? MdOpenInNew
            : undefined
        }
        confirmButtonIconPosition={select(
          'ConfirmButtonIconPosition',
          { left: 'left', right: 'right' },
          'left',
          'MessageDialogConfirm'
        )}
        responsive={boolean('Responsive', false, 'MessageDialogConfirm')}
        mobileButtonLayout={
          select(
            'mobileButtonLayout',
            {
              row: 'row',
              column: 'column',
              undefined: '',
            },
            '',
            'MessageDialogConfirm'
          ) || undefined
        }
        {...commonKnobs()}
      >
        <Paragraph>
          文字量や構成要素のすくないメッセージなどは中央寄せで表示
          <br />
          テキストテキストテキストテキストテキストテキスト
        </Paragraph>
      </MessageDialogConfirm>
    )}
  />
);

export const OnTaskDialog = () => (
  <ToggleDialog
    render={(isOpen, toggle) => (
      <>
        <TaskDialog
          isOpen={isOpen}
          title="タスクダイアログ"
          onRequestClose={toggle}
          closeButtonLabel="キャンセル"
        >
          タスクダイアログ タスクダイアログ タスクダイアログ タスクダイアログ
          タスクダイアログ タスクダイアログ タスクダイアログ タスクダイアログ
          タスクダイアログ タスクダイアログ タスクダイアログ
        </TaskDialog>
        <MessageDialogConfirm
          isOpen={isOpen}
          id={text('Id', '', 'MessageDialogConfirm')}
          title={text(
            'Title',
            'タスクダイアログ（確認）',
            'MessageDialogConfirm'
          )}
          onRequestClose={toggle}
          onConfirm={toggle}
          closeButtonLabel={text(
            'CloseButtonLabel',
            'キャンセル',
            'MessageDialogConfirm'
          )}
          confirmButtonLabel={text(
            'ConfirmButtonLabel',
            'OK',
            'MessageDialogConfirm'
          )}
          responsive={boolean('Responsive', false, 'MessageDialogConfirm')}
          mobileButtonLayout={
            select(
              'mobileButtonLayout',
              {
                row: 'row',
                column: 'column',
                undefined: '',
              },
              '',
              'MessageDialogConfirm'
            ) || undefined
          }
          {...commonKnobs()}
        >
          <Paragraph>
            文字量や構成要素のすくないメッセージなどは中央寄せで表示
            <br />
            テキストテキストテキストテキストテキストテキスト
          </Paragraph>
        </MessageDialogConfirm>
      </>
    )}
  />
);

export const Responsive = () => (
  <VibesProvider fixedLayout={false}>
    <ToggleDialog
      render={(isOpen, toggle) => (
        <MessageDialogConfirm
          isOpen={isOpen}
          title="レスポンシブ"
          onRequestClose={toggle}
          confirmButtonLabel="OK"
          onConfirm={toggle}
          closeButtonLabel="キャンセル"
        >
          <Paragraph>
            <code>responsive</code> prop または{' '}
            <code>
              &lt;VibesProvider responsive={'{'}false{'}'}&gt;
            </code>{' '}
            を使用すると、レスポンシブレイアウトで使用できます
          </Paragraph>
        </MessageDialogConfirm>
      )}
    />
  </VibesProvider>
);

export const BigContent = () => (
  <ToggleDialog
    render={(isOpen, toggle) => (
      <MessageDialogConfirm
        isOpen={isOpen}
        title="コンテンツの量が多いとき"
        onRequestClose={toggle}
        confirmButtonLabel="OK"
        onConfirm={toggle}
        closeButtonLabel="キャンセル"
      >
        {Array(50)
          .fill(0)
          .map((i) => (
            <Paragraph key={i}>
              コンテンツの量が多い場合はスクロールします
            </Paragraph>
          ))}
      </MessageDialogConfirm>
    )}
  />
);
export const ContentSamples = () => (
  <>
    <div style={{ display: 'flex', marginBottom: '1rem' }}>
      {/* $FlowFixMe */}
      <MessageDialogConfirmContent
        title="メッセージダイアログ（確認）"
        onRequestClose={action('close')}
        onConfirm={action('confirm')}
        closeButtonLabel="キャンセル"
        confirmButtonLabel="OK"
      >
        <Paragraph>
          文字量や構成要素のすくないメッセージなどは中央寄せで表示
          <br />
          テキストテキストテキストテキストテキストテキスト
        </Paragraph>
      </MessageDialogConfirmContent>
    </div>
    <div style={{ display: 'flex', marginBottom: '1rem' }}>
      {/* $FlowFixMe */}
      <MessageDialogConfirmContent
        title="メッセージダイアログ（デンジャー）"
        onRequestClose={action('close')}
        onConfirm={action('confirm')}
        closeButtonLabel="キャンセル"
        confirmButtonLabel="OK"
        danger
      >
        <Paragraph>
          文字量や構成要素のすくないメッセージなどは中央寄せで表示
          <br />
          テキストテキストテキストテキストテキストテキスト
        </Paragraph>
      </MessageDialogConfirmContent>
    </div>
    <div style={{ display: 'flex', marginBottom: '1rem' }}>
      {/* $FlowFixMe */}
      <MessageDialogConfirmContent
        title="メッセージダイアログ（disabled）"
        onRequestClose={action('close')}
        onConfirm={action('confirm')}
        closeButtonLabel="キャンセル"
        confirmButtonLabel="OK"
        disabled
      >
        <Paragraph>
          文字量や構成要素のすくないメッセージなどは中央寄せで表示
          <br />
          テキストテキストテキストテキストテキストテキスト
        </Paragraph>
      </MessageDialogConfirmContent>
    </div>
    <div style={{ display: 'flex', marginBottom: '1rem' }}>
      {/* $FlowFixMe */}
      <MessageDialogConfirmContent
        title="メッセージダイアログ（suspend）"
        onRequestClose={action('close')}
        onConfirm={action('confirm')}
        closeButtonLabel="キャンセル"
        confirmButtonLabel="OK"
        suspend
      >
        <Paragraph>
          文字量や構成要素のすくないメッセージなどは中央寄せで表示
          <br />
          テキストテキストテキストテキストテキストテキスト
        </Paragraph>
      </MessageDialogConfirmContent>
    </div>
    <div style={{ display: 'flex', marginBottom: '1rem' }}>
      {/* $FlowFixMe */}
      <MessageDialogConfirmContent
        title="メッセージダイアログ（情報量が多い場合）"
        onRequestClose={action('close')}
        onConfirm={action('confirm')}
        closeButtonLabel="キャンセル"
        confirmButtonLabel="OK"
        contentAlign="left"
      >
        <ColumnBase ml={-1.5} mr={-1.5}>
          <Paragraph>
            原則としては文字量や構成要素のすくないメッセージが入ることを想定していますが、横や縦に長いコンテンツを入れざるを得ない場合は、横幅が70remまで広げられ、縦方向にはスクロールするようになります。場合に応じてColumnBaseを敷いたり、コンテンツのみを左寄せにするレイアウトも可能です。
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキスト
          </Paragraph>
        </ColumnBase>
      </MessageDialogConfirmContent>
    </div>
  </>
);

export const ResponsiveMessageDialogConfirmSample = () => (
  <ToggleDialog
    render={(isOpen, toggle) => (
      <MessageDialogConfirm
        id={text('Id', '', 'MessageDialogConfirm')}
        isOpen={isOpen}
        title="モバイルでボタンが横並びになる例"
        onRequestClose={toggle}
        onConfirm={action('confirm')}
        closeButtonLabel={text(
          'CloseButtonLabel',
          'キャンセル',
          'MessageDialogConfirm'
        )}
        confirmButtonLabel={text(
          'ConfirmButtonLabel',
          'OK',
          'MessageDialogConfirm'
        )}
        confirmButtonHref={text(
          'ConfirmButtonHref',
          '',
          'MessageDialogConfirm'
        )}
        confirmButtonTarget={select(
          'ConfirmButtonTarget',
          {
            _blank: '_blank',
            _self: '_self',
          },
          '_self',
          'MessageDialogConfirm'
        )}
        confirmButtonIconComponent={
          boolean('ConfirmButtonWithIcon', false, 'MessageDialogConfirm')
            ? MdOpenInNew
            : undefined
        }
        confirmButtonIconPosition={select(
          'ConfirmButtonIconPosition',
          { left: 'left', right: 'right' },
          'left',
          'MessageDialogConfirm'
        )}
        responsive={true}
        mobileButtonLayout="row"
        {...commonKnobs()}
      >
        <Paragraph>
          文字量や構成要素のすくないメッセージなどは中央寄せで表示
          <br />
          テキストテキストテキストテキストテキストテキスト
        </Paragraph>
      </MessageDialogConfirm>
    )}
  />
);

export const FocusElementAfterClose = () => {
  const [mode, setMode] = React.useState<'view' | 'edit'>('view');
  const [isModalOpen, setModalOpen] = React.useState(false);
  const elmRef = React.useRef<HTMLHeadingElement>(null);
  return (
    <>
      <WithSideContent
        verticalAlign="middle"
        mb={1}
        sideContent={
          <>
            {mode === 'view' ? (
              <Button IconComponent={MdEdit} onClick={() => setMode('edit')}>
                編集
              </Button>
            ) : (
              <>
                <Button
                  IconComponent={MdCheck}
                  appearance="primary"
                  mr={1}
                  onClick={() => setModalOpen(true)}
                >
                  保存
                </Button>
                <Button
                  IconComponent={MdCancel}
                  appearance="tertiary"
                  onClick={() => setMode('view')}
                >
                  キャンセル
                </Button>
              </>
            )}
            <MessageDialogConfirm
              title="変更を保存しますか？"
              onConfirm={() => {
                setMode('view');
                setModalOpen(false);
              }}
              onRequestClose={() => setModalOpen(false)}
              confirmButtonLabel="保存"
              closeButtonLabel="キャンセル"
              isOpen={isModalOpen}
              elementFocusAfterClose={
                (elmRef.current as HTMLElement) || undefined
              }
              danger
            >
              この変更により、よからぬことが起きることがあります。本当に保存しますか？
            </MessageDialogConfirm>
          </>
        }
      >
        <SectionTitle ref={elmRef}>見出し</SectionTitle>
      </WithSideContent>
      <Paragraph mb={1}>
        <code>elementFocusAfterClose</code>
        を指定することで、ダイアログを閉じたときに特定の要素にフォーカスを移すことができます。
      </Paragraph>
      <Paragraph mb={1}>
        モーダルを開くのに使用したボタンが、ダイアログを閉じたときに存在しなくなる場合に使用します。
      </Paragraph>
      <Paragraph>
        このサンプルでは編集モードから保存するときに確認ダイアログを表示し、閉じると見出し部分にフォーカスします
      </Paragraph>
    </>
  );
};
