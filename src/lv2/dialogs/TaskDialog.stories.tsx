import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import TaskDialog, { TaskDialogContent } from './TaskDialog';
import Paragraph from '../../lv1/typography/Paragraph';
import TextButton from '../../lv1/buttons/TextButton';
import CheckBox from '../../lv1/forms/CheckBox';
import { commonKnobs } from '../../../stories';
import ToggleDialog from './ToggleDialog';
import MessageIcon from '../messageIcon/MessageIcon';
import { Button } from '../../lv1';
import { MdAdd } from 'react-icons/md';
import { VibesProvider } from '../../utilities';

export default {
  component: TaskDialog,
};

export const TaskDialogComponent = () => (
  <ToggleDialog
    render={(isOpen, toggle) => (
      <TaskDialog
        id={text('Id', '', 'TaskDialog')}
        isOpen={isOpen}
        title={text('Title', 'タスクダイアログ', 'TaskDialog')}
        onRequestClose={toggle}
        onPrimaryAction={action('primary action')}
        closeButtonLabel={text('CloseButtonLabel', 'キャンセル', 'TaskDialog')}
        primaryButtonLabel={text('PrimaryButtonLabel', 'OK', 'TaskDialog')}
        danger={boolean('Danger', false, 'TaskDialog')}
        disabled={boolean('Disabled', false, 'TaskDialog')}
        suspend={boolean('Suspend', false, 'TaskDialog')}
        shouldCloseOnOverlayClickOrEsc={boolean(
          'ShouldCloseOnOverlayClickOrEsc',
          false,
          'TaskDialog'
        )}
        responsive={boolean('Responsive', false, 'TaskDialog')}
        mobileButtonLayout={
          select(
            'mobileButtonLayout',
            {
              row: 'row',
              column: 'column',
              undefined: '',
            },
            '',
            'TaskDialog'
          ) || undefined
        }
        {...commonKnobs()}
      >
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
      </TaskDialog>
    )}
  />
);

export const HeaderSideContentSample = () => (
  <ToggleDialog
    render={(isOpen, toggle) => (
      <TaskDialog
        isOpen={isOpen}
        id={text('Id', '', 'TaskDialog')}
        title={text('Title', 'タスクダイアログ', 'TaskDialog')}
        onRequestClose={toggle}
        onPrimaryAction={action('primary action')}
        closeButtonLabel={text('CloseButtonLabel', 'キャンセル', 'TaskDialog')}
        primaryButtonLabel={text('PrimaryButtonLabel', 'OK', 'TaskDialog')}
        responsive={boolean('Responsive', true, 'TaskDialog')}
        headerSideContent={<Button>ボタン</Button>}
        {...commonKnobs()}
      >
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
      </TaskDialog>
    )}
  />
);

export const DialogFooterSample = () => (
  <ToggleDialog
    render={(isOpen, toggle) => (
      <TaskDialog
        isOpen={isOpen}
        id={text('Id', '', 'TaskDialog')}
        title={text('Title', 'タスクダイアログ', 'TaskDialog')}
        onRequestClose={toggle}
        onPrimaryAction={action('primary action')}
        closeButtonLabel={text('CloseButtonLabel', 'キャンセル', 'TaskDialog')}
        primaryButtonLabel={text('PrimaryButtonLabel', 'OK', 'TaskDialog')}
        responsive={boolean('Responsive', true, 'TaskDialog')}
        footerOptionalContent={<CheckBox>チェックボックス</CheckBox>}
        footerSideContent={<TextButton>テキストボタン</TextButton>}
        {...commonKnobs()}
      >
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
      </TaskDialog>
    )}
  />
);

export const ResponsiveDialogFooterSample = () => (
  <ToggleDialog
    render={(isOpen, toggle) => (
      <TaskDialog
        isOpen={isOpen}
        id={text('Id', '', 'TaskDialog')}
        title="モバイルで上位2ボタンだけ横並びになる例"
        onRequestClose={toggle}
        onPrimaryAction={action('primary action')}
        closeButtonLabel={text('CloseButtonLabel', 'キャンセル', 'TaskDialog')}
        primaryButtonLabel={text('PrimaryButtonLabel', 'OK', 'TaskDialog')}
        responsive={true}
        footerOptionalContent={
          <Button appearance="tertiary" IconComponent={MdAdd}>
            ターシャリボタン
          </Button>
        }
        footerSideContent={<TextButton>テキストボタン</TextButton>}
        mobileButtonLayout="row"
        {...commonKnobs()}
      >
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
      </TaskDialog>
    )}
  />
);

export const Responsive = () => (
  <VibesProvider fixedLayout={false}>
    <ToggleDialog
      render={(isOpen, toggle) => (
        <TaskDialog
          id={text('Id', '', 'TaskDialog')}
          isOpen={isOpen}
          title="レスポンシブレイアウト"
          onRequestClose={toggle}
          onPrimaryAction={toggle}
          closeButtonLabel="キャンセル"
          primaryButtonLabel="OK"
          mobileButtonLayout={
            select(
              'mobileButtonLayout',
              {
                row: 'row',
                column: 'column',
                undefined: '',
              },
              '',
              'TaskDialog'
            ) || undefined
          }
          {...commonKnobs()}
        >
          <Paragraph mb={1}>
            <code>responsive</code> prop または{' '}
            <code>
              &lt;VibesProvider responsive={'{'}false{'}'}&gt;
            </code>{' '}
            を使用すると、レスポンシブレイアウトで使用できます
          </Paragraph>
          <Paragraph mb={1}>
            <code>responsive</code> prop または{' '}
            <code>
              &lt;VibesProvider responsive={'{'}false{'}'}&gt;
            </code>{' '}
            を使用すると、レスポンシブレイアウトで使用できます
          </Paragraph>
          <Paragraph mb={1}>
            <code>responsive</code> prop または{' '}
            <code>
              &lt;VibesProvider responsive={'{'}false{'}'}&gt;
            </code>{' '}
            を使用すると、レスポンシブレイアウトで使用できます
          </Paragraph>
          <Paragraph mb={1}>
            <code>responsive</code> prop または{' '}
            <code>
              &lt;VibesProvider responsive={'{'}false{'}'}&gt;
            </code>{' '}
            を使用すると、レスポンシブレイアウトで使用できます
          </Paragraph>
          <Paragraph>
            <code>responsive</code> prop または{' '}
            <code>
              &lt;VibesProvider responsive={'{'}false{'}'}&gt;
            </code>{' '}
            を使用すると、レスポンシブレイアウトで使用できます
          </Paragraph>
        </TaskDialog>
      )}
    />
  </VibesProvider>
);

export const ContentLabel = () => (
  <ToggleDialog
    render={(isOpen, toggle) => (
      <TaskDialog
        isOpen={isOpen}
        id={text('Id', '', 'TaskDialog')}
        title={text('Title', 'タスクダイアログ', 'TaskDialog')}
        onRequestClose={toggle}
        onPrimaryAction={action('primary action')}
        closeButtonLabel={text('CloseButtonLabel', 'キャンセル', 'TaskDialog')}
        primaryButtonLabel={text('PrimaryButtonLabel', 'OK', 'TaskDialog')}
        responsive={boolean('Responsive', true, 'TaskDialog')}
        headerSideContent={<Button>ボタン</Button>}
        contentLabel={text('ContentLabel', 'タスクダイアログ', 'TaskDialog')}
        {...commonKnobs()}
      >
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
      </TaskDialog>
    )}
  />
);

export const ContentSamples = () => (
  <>
    <div style={{ display: 'flex', marginBottom: '1rem' }}>
      {/* $FlowFixMe */}
      <TaskDialogContent
        title="タスクダイアログ"
        onRequestClose={action('close')}
        onPrimaryAction={action('primary action')}
        closeButtonLabel="キャンセル"
        primaryButtonLabel="OK"
      >
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
      </TaskDialogContent>
    </div>

    <div style={{ display: 'flex', marginBottom: '1rem' }}>
      {/* $FlowFixMe */}
      <TaskDialogContent
        title="タスクダイアログ（without primaryButton）"
        onRequestClose={action('close')}
        closeButtonLabel="キャンセル"
      >
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
      </TaskDialogContent>
    </div>

    <div style={{ display: 'flex', marginBottom: '1rem' }}>
      {/* $FlowFixMe */}
      <TaskDialogContent
        title="タスクダイアログ（disabled）"
        onRequestClose={action('close')}
        onPrimaryAction={action('primary action')}
        closeButtonLabel="キャンセル"
        primaryButtonLabel="OK"
        danger
        disabled
      >
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
      </TaskDialogContent>
    </div>

    <div style={{ display: 'flex', marginBottom: '1rem' }}>
      {/* $FlowFixMe */}
      <TaskDialogContent
        title="タスクダイアログ（suspend）"
        onRequestClose={action('close')}
        onPrimaryAction={action('primary action')}
        closeButtonLabel="キャンセル"
        primaryButtonLabel="OK"
        danger
        suspend
      >
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
      </TaskDialogContent>
    </div>

    <div style={{ display: 'flex', marginBottom: '1rem' }}>
      <TaskDialogContent
        title={
          <>
            タイトルに文字列と他の要素を合わせて置く例
            {/* タイトルと合わせて使う場合はMessageIconにlargeサイズの指定があると良い */}
            <MessageIcon ml={0.5} label="ヘルプ">
              ここに説明が入ります
            </MessageIcon>
          </>
        }
        onRequestClose={action('close')}
        onPrimaryAction={action('primary action')}
        closeButtonLabel="キャンセル"
        primaryButtonLabel="OK"
      >
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
        <Paragraph>
          フォームやリストなどのユーザー操作が含まれる場合はタスクダイアログを使用
        </Paragraph>
      </TaskDialogContent>
    </div>
  </>
);
