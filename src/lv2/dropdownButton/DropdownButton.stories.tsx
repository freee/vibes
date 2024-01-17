import * as React from 'react';

import type { StoryObj } from '@storybook/react';
import DropdownButton from './DropdownButton';
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { commonKnobs } from '../../../stories';
import TaskDialog from '../dialogs/TaskDialog';
import Button from '../../lv1/buttons/Button';
import { InlineLink, Note } from '../../lv1';
import { FormActions } from '../../../src';
import { DropdownContent } from '../dropdown/types';

export default {
  component: DropdownButton,
};

export const DropdownButtonComponent = () => (
  <DropdownButton
    buttonLabel={text('ButtonLabel', 'ボタンラベル', 'DropdownButton')}
    disabled={boolean('Disabled', false, 'DropdownButton')}
    small={boolean('small', false, 'DropdownButton')}
    large={boolean('large', false, 'DropdownButton')}
    appearance={
      select(
        'Appearance',
        {
          undefined: '',
          primary: 'primary',
          secondary: 'secondary',
          tertiary: 'tertiary',
        },
        'secondary',
        'DropdownButton'
      ) || undefined
    }
    iconOnly={boolean('iconOnly', false, 'DropdownButton')}
    iconPosition={
      select(
        'IconPosition',
        {
          undefined: '',
          left: 'left',
          right: 'right',
        },
        'right',
        'DropdownButton'
      ) || undefined
    }
    dropdownContents={[
      {
        type: 'selectable',
        text: 'menu1',
        ariaLabel: 'menu1',
        onClick: action('click'),
        'data-test': '選択可能なアイテム',
      },
      {
        type: 'selectable',
        text: 'menu2',
        ariaLabel: 'menu2',
        onClick: action('click'),
      },
      {
        type: 'selectable',
        text: 'とてもとてもとてもとてもとてもとてもとても長い',
        ariaLabel: 'menu3',
        onClick: action('click'),
      },
      {
        type: 'selectable',
        text: 'menu4 (disabled)',
        ariaLabel: 'menu4',
        disabled: true,
      },
      {
        type: 'checkbox',
        text: 'チェックボックス',
        value: 'checkbox-value',
        onChange: action('checkbox change'),
        checked: false,
        'data-test': 'チェック可能なアイテム',
      },
      { type: 'selectable', text: 'もっと見る', disableOnRequestClose: true },
      {
        type: 'textOnly',
        text: (
          <Note>
            詳しくは{' '}
            <InlineLink href="https://support.freee.co.jp" target="_blank">
              ヘルプページ
            </InlineLink>
            をご覧ください
          </Note>
        ),
        'data-test': 'テキストアイテム',
      },
    ]}
    onOpen={action('open')}
    onClose={action('close')}
    {...commonKnobs()}
  />
);

export const IconOnlyDropdownButton = () => (
  <DropdownButton
    buttonLabel={text(
      'ButtonLabel',
      'ボタンのラベルはaria-labelとなるため、必ず意味のあるものを指定してください',
      'DropdownButton'
    )}
    disabled={boolean('Disabled', false, 'DropdownButton')}
    iconOnly={true}
    small={boolean('small', false, 'DropdownButton')}
    large={boolean('large', false, 'DropdownButton')}
    appearance={
      select(
        'Appearance',
        {
          undefined: '',
          primary: 'primary',
          secondary: 'secondary',
          tertiary: 'tertiary',
        },
        'secondary',
        'DropdownButton'
      ) || undefined
    }
    iconPosition={
      select(
        'IconPosition',
        {
          undefined: '',
          left: 'left',
          right: 'right',
        },
        'right',
        'DropdownButton'
      ) || undefined
    }
    dropdownContents={[
      {
        type: 'selectable',
        text: 'menu1',
        ariaLabel: 'menu1',
        onClick: action('click'),
      },
      {
        type: 'selectable',
        text: 'menu2',
        ariaLabel: 'menu2',
        onClick: action('click'),
      },
      {
        type: 'selectable',
        text: 'とてもとてもとてもとてもとてもとてもとても長い',
        ariaLabel: 'menu3',
        onClick: action('click'),
      },
      {
        type: 'selectable',
        text: 'menu4 (disabled)',
        ariaLabel: 'menu4',
        disabled: true,
      },
    ]}
    {...commonKnobs()}
  />
);

export const CheckboxDropdown = () => {
  const options = ['ステータスを表示', '金額を表示', '負の値を△で表示'];
  const [status, setStatus] = React.useState<boolean[]>(
    Array(options.length).fill(false)
  );
  return (
    <DropdownButton
      buttonLabel={text('ButtonLabel', '表示設定', 'DropdownButton')}
      disabled={boolean('Disabled', false, 'DropdownButton')}
      small={boolean('small', false, 'DropdownButton')}
      appearance={
        select(
          'Appearance',
          {
            undefined: '',
            primary: 'primary',
            secondary: 'secondary',
            tertiary: 'tertiary',
          },
          'secondary',
          'DropdownButton'
        ) || undefined
      }
      dropdownContents={options.map((opt, idx) => ({
        type: 'checkbox',
        text: opt,
        checked: status[idx],
        onChange: (e) => {
          const newStatus = [...status];
          newStatus[idx] = e.target.checked;
          setStatus(newStatus);
        },
      }))}
      {...commonKnobs()}
    />
  );
};

export const SingleOption = () => (
  <DropdownButton
    buttonLabel={text('ButtonLabel', 'ボタンラベル', 'DropdownButton')}
    disabled={boolean('Disabled', false, 'DropdownButton')}
    small={boolean('small', false, 'DropdownButton')}
    appearance={
      select(
        'Appearance',
        {
          undefined: '',
          primary: 'primary',
          secondary: 'secondary',
          tertiary: 'tertiary',
        },
        'secondary',
        'DropdownButton'
      ) || undefined
    }
    iconPosition={
      select(
        'IconPosition',
        {
          undefined: '',
          left: 'left',
          right: 'right',
        },
        'right',
        'DropdownButton'
      ) || undefined
    }
    dropdownContents={[
      {
        type: 'selectable',
        text: 'menu1',
        ariaLabel: 'menu1',
        onClick: action('click'),
        target: '_blank',
        url: 'https://www.freee.co.jp',
      },
    ]}
    {...commonKnobs()}
  />
);

export const InBigBlock = () => (
  <div style={{ padding: '20rem 80rem' }}>
    <DropdownButton
      buttonLabel={text('ButtonLabel', 'ボタンラベル', 'DropdownButton')}
      disabled={boolean('Disabled', false, 'DropdownButton')}
      small={boolean('small', false, 'DropdownButton')}
      large={boolean('large', false, 'DropdownButton')}
      iconOnly={boolean('IconOnly', false, 'DropdownButton')}
      appearance={
        select(
          'Appearance',
          {
            undefined: '',
            primary: 'primary',
            secondary: 'secondary',
            tertiary: 'tertiary',
          },
          'secondary',
          'DropdownButton'
        ) || undefined
      }
      iconPosition={
        select(
          'IconPosition',
          {
            undefined: '',
            left: 'left',
            right: 'right',
          },
          'right',
          'DropdownButton'
        ) || undefined
      }
      dropdownContents={[
        {
          type: 'selectable',
          text: 'menu1',
          ariaLabel: 'menu1',
          onClick: action('click'),
        },
        {
          type: 'selectable',
          text: 'menu2',
          ariaLabel: 'menu2',
          onClick: action('click'),
        },
        {
          type: 'selectable',
          text: 'とてもとてもとてもとてもとてもとてもとても長い',
          ariaLabel: 'menu3',
          onClick: action('click'),
        },
        {
          type: 'selectable',
          text: 'menu4 (disabled)',
          ariaLabel: 'menu4',
          disabled: true,
        },
      ]}
      {...commonKnobs()}
    />
  </div>
);

const TaskDialogSample = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>open dialog</Button>

      <TaskDialog
        onRequestClose={() => {
          setIsOpen(false);
        }}
        title="TaskDialog"
        isOpen={isOpen}
        closeButtonLabel="閉じる"
      >
        <DropdownButton
          buttonLabel={text('ButtonLabel', 'ボタンラベル', 'DropdownButton')}
          disabled={boolean('Disabled', false, 'DropdownButton')}
          small={boolean('small', false, 'DropdownButton')}
          large={boolean('large', false, 'DropdownButton')}
          iconOnly={boolean('IconOnly', false, 'DropdownButton')}
          appearance={
            select(
              'Appearance',
              {
                undefined: '',
                primary: 'primary',
                secondary: 'secondary',
                tertiary: 'tertiary',
              },
              'secondary',
              'DropdownButton'
            ) || undefined
          }
          iconPosition={
            select(
              'IconPosition',
              {
                undefined: '',
                left: 'left',
                right: 'right',
              },
              'right',
              'DropdownButton'
            ) || undefined
          }
          dropdownContents={[
            {
              type: 'selectable',
              text: 'menu1',
              ariaLabel: 'menu1',
              onClick: action('click'),
            },
            {
              type: 'selectable',
              text: 'menu2',
              ariaLabel: 'menu2',
              onClick: action('click'),
            },
            {
              type: 'selectable',
              text: 'とてもとてもとてもとてもとてもとてもとても長い',
              ariaLabel: 'menu3',
              onClick: action('click'),
            },
            {
              type: 'selectable',
              text: 'menu4 (disabled)',
              ariaLabel: 'menu4',
              disabled: true,
            },
          ]}
          {...commonKnobs()}
        />
      </TaskDialog>
    </>
  );
};

export const InsideTaskDialog = () => <TaskDialogSample />;

export const FixedDropdownButton: StoryObj<typeof DropdownButton> = {
  parameters: {
    docs: {
      story: {
        height: '500px',
        inline: false,
      },
    },
  },
  render: () => {
    const dropdownContents: DropdownContent[] = [
      {
        type: 'selectable',
        text: 'menu1',
        ariaLabel: 'menu1',
        onClick: action('click'),
      },
      {
        type: 'selectable',
        text: 'menu2',
        ariaLabel: 'menu2',
        onClick: action('click'),
      },
    ];

    return (
      <div style={{ height: 2000 }}>
        <div
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            left: 0,
            background: 'white',
            padding: '1rem 2.5rem',
          }}
        >
          <DropdownButton
            buttonLabel={'ヘッダー表示設定'}
            appearance="primary"
            dropdownContents={dropdownContents}
          />
        </div>
        <div style={{ position: 'sticky', top: '8rem', marginTop: '12rem' }}>
          <DropdownButton
            buttonLabel="position: sticky"
            appearance="primary"
            dropdownContents={dropdownContents}
          />
        </div>
        <FormActions align="left" position="fixed">
          <DropdownButton
            buttonLabel={'フッダー表示設定'}
            appearance="primary"
            dropdownContents={dropdownContents}
          />
        </FormActions>
      </div>
    );
  },
};
