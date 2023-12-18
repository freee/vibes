import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import TaskDialog from './TaskDialog';

import MessageDialog, { MessageDialogContent } from './MessageDialog';
import Paragraph from '../../lv1/typography/Paragraph';
import { commonKnobs } from '../../../stories';
import ToggleDialog from './ToggleDialog';
import ColumnBase from '../../lv1/bases/ColumnBase';
import { VibesProvider } from '../../utilities';
import { Button, SectionTitle, WithSideContent } from '../../lv1';
import { MdEdit, MdCheck, MdCancel } from 'react-icons/md';

export default {
  component: MessageDialog,
};

export const MessageDialogComponent = () => (
  <ToggleDialog
    render={(isOpen, toggle) => (
      <MessageDialog
        id={text('Id', '', 'MessageDialog')}
        isOpen={isOpen}
        title={text('Title', 'タスクダイアログ', 'MessageDialog')}
        onRequestClose={toggle}
        closeButtonLabel={text(
          'CloseButtonLabel',
          'キャンセル',
          'MessageDialog'
        )}
        responsive={boolean('Responsive', false, 'MessageDialog')}
        {...commonKnobs()}
      >
        <Paragraph>
          文字量や構成要素のすくないメッセージなどは中央寄せで表示
          <br />
          テキストテキストテキストテキストテキストテキスト
        </Paragraph>
      </MessageDialog>
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
        <MessageDialog
          isOpen={isOpen}
          id={text('Id', '', 'MessageDialog')}
          title={text('Title', 'タスクダイアログ', 'MessageDialog')}
          onRequestClose={toggle}
          closeButtonLabel={text(
            'CloseButtonLabel',
            'キャンセル',
            'MessageDialog'
          )}
          responsive={boolean('Responsive', false, 'MessageDialog')}
          {...commonKnobs()}
        >
          <Paragraph>
            文字量や構成要素のすくないメッセージなどは中央寄せで表示
            <br />
            テキストテキストテキストテキストテキストテキスト
          </Paragraph>
        </MessageDialog>
      </>
    )}
  />
);

export const Responsive = () => (
  <VibesProvider fixedLayout={false}>
    <ToggleDialog
      render={(isOpen, toggle) => (
        <MessageDialog
          isOpen={isOpen}
          title="レスポンシブ"
          onRequestClose={toggle}
          closeButtonLabel="閉じる"
        >
          <Paragraph>
            <code>responsive</code> prop または{' '}
            <code>
              &lt;VibesProvider responsive={'{'}false{'}'}&gt;
            </code>{' '}
            を使用すると、レスポンシブレイアウトで使用できます
          </Paragraph>
        </MessageDialog>
      )}
    />
  </VibesProvider>
);

export const BigContent = () => (
  <ToggleDialog
    render={(isOpen, toggle) => (
      <MessageDialog
        isOpen={isOpen}
        title="コンテンツの量が多いとき"
        onRequestClose={toggle}
        closeButtonLabel="キャンセル"
      >
        {Array(50)
          .fill(0)
          .map((i) => (
            <Paragraph key={i}>
              コンテンツの量が多い場合はスクロールします
            </Paragraph>
          ))}
      </MessageDialog>
    )}
  />
);

export const ContentSamples = () => (
  <>
    <div style={{ display: 'flex', marginBottom: '1rem' }}>
      <MessageDialogContent
        title="メッセージダイアログ"
        onRequestClose={action('close')}
        closeButtonLabel="OK"
      >
        <Paragraph>
          文字量や構成要素のすくないメッセージなどは中央寄せで表示
          <br />
          テキストテキストテキストテキストテキストテキスト
        </Paragraph>
      </MessageDialogContent>
    </div>
    <div style={{ display: 'flex', marginBottom: '1rem' }}>
      {/* $FlowFixMe */}
      <MessageDialogContent
        title="メッセージダイアログ"
        onRequestClose={action('close')}
        closeButtonLabel="OK"
        closeButtonAppearance="primary"
      >
        <Paragraph>
          文字量や構成要素のすくないメッセージなどは中央寄せで表示
          <br />
          テキストテキストテキストテキストテキストテキスト
        </Paragraph>
      </MessageDialogContent>
    </div>
    <div style={{ display: 'flex', marginBottom: '1rem' }}>
      {/* $FlowFixMe */}
      <MessageDialogContent
        title="メッセージダイアログ"
        onRequestClose={action('close')}
        closeButtonLabel="OK"
        closeButtonAppearance="secondary"
      >
        <Paragraph>
          文字量や構成要素のすくないメッセージなどは中央寄せで表示
          <br />
          テキストテキストテキストテキストテキストテキスト
        </Paragraph>
      </MessageDialogContent>
    </div>
    <div style={{ display: 'flex', marginBottom: '1rem' }}>
      {/* $FlowFixMe */}
      <MessageDialogContent
        title="メッセージダイアログ"
        onRequestClose={action('close')}
        closeButtonLabel="OK"
        closeButtonAppearance="tertiary"
      >
        <Paragraph>
          文字量や構成要素のすくないメッセージなどは中央寄せで表示
          <br />
          テキストテキストテキストテキストテキストテキスト
        </Paragraph>
      </MessageDialogContent>
    </div>
    <div style={{ display: 'flex', marginBottom: '1rem' }}>
      {/* $FlowFixMe */}
      <MessageDialogContent
        title="メッセージダイアログ"
        onRequestClose={action('close')}
        closeButtonLabel="OK"
        closeButtonAppearance="secondary"
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
      </MessageDialogContent>
    </div>
  </>
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
            <MessageDialog
              title="変更を反映しました"
              onRequestClose={() => {
                setMode('view');
                setModalOpen(false);
              }}
              closeButtonLabel="OK"
              isOpen={isModalOpen}
              elementFocusAfterClose={
                (elmRef.current as HTMLElement) || undefined
              }
            >
              なんか別の画面で見られたりします
            </MessageDialog>
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
